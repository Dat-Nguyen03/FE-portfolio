import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";

import { IProject } from "../../../interfaces/project";
import { ICategory } from "../../../interfaces/category";
import { Link } from "react-router-dom";
import {
  getCategory,
  getCategoryById,
  removeCategory,
} from "../../../api/category";

type Props = {};

interface DataType {
  key: string;
  name: string;
  projects: IProject[];
  updatedAt: string;
  createdAt: string;
}

const ListCategory = (props: Props) => {
  const [categories, setCategories] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Projects",
      dataIndex: "projects",
      key: "projects",
      render: (_, { projects }) => (
        <>
          {projects.map((project, index) => {
            let color = project.title.length > 5 ? "geekblue" : "green";
            return (
              <Tag key={index} color={color} className="mb-2">
                {project.title.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Update At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="flex flex-col">
          <Popconfirm
            placement="topLeft"
            title="Bạn có thực sự muốn xóa không?"
            description={
              "Hành động này sẽ xóa vĩnh viễn và không thể khôi phục"
            }
            onConfirm={() => handleRemove(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button type="dashed">
            <Link to="/admin/category/add">Add</Link>{" "}
          </Button>
          <Button type="primary" className="bg-[#1677FF]">
            <Link to={`/admin/category/edit/${record.key}`}>Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const handleRemove = async (id: number | string) => {
    try {
      if (id) {
        const {
          data: { projectCategory },
        } = await removeCategory(id);
        message.info(`Xóa category "${projectCategory.name}" thành công ✔`);
        setCategories(categories.filter((item: DataType) => item.key !== id));
      }
    } catch (error: any) {
      message.info(`Xóa category thất bại ${error.message}`);
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await getCategory();

      setCategories(
        data.map((item: ICategory) => {
          return {
            key: item._id,
            name: item.name,
            projects: item.projects,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          };
        })
      );
    })();
  }, []);

  return <Table columns={columns} dataSource={categories} />;
};

export default ListCategory;
