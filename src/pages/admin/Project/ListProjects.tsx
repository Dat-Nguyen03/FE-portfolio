import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Space, Table, Tag, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getAll, removeProject } from "../../../api/project";
import { IProject } from "../../../interfaces/project";
import { ITechology } from "../../../interfaces/techology";
import { ICategory } from "../../../interfaces/category";

type Props = {};
interface DataType {
  key: string;
  title: string;
  projectCategoryId: ICategory;
  imgUrl: string;
  description: string;
  technologyId: ITechology[];
}

const ListProjects = (props: Props) => {
  const [projects, setProjects] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Img",
      key: "imgUrl",
      render: (_, record) => <img src={record.imgUrl} alt="" />,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "projectCategoryId",
      key: "projectCategoryId",
    },
    {
      title: "Techologies",
      dataIndex: "technologies",
      key: "technologies",
      render: (_, { technologyId }) => (
        <>
          {technologyId.map((technologi, index) => {
            let color = technologi.name.length > 5 ? "geekblue" : "green";
            return (
              <Tag key={index} color={color} className="mb-2">
                {technologi.name.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
            <Link to="/admin/projects/add">Add</Link>{" "}
          </Button>
          <Button type="primary" className="bg-[#1677FF]">
            <Link to={`/admin/projects/edit/${record.key}`}>Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const handleRemove = async (id: number | string) => {
    try {
      if (id) {
        await removeProject(id);
        message.info("Đã xóa thành công!");
        setProjects(projects.filter((item: DataType) => item.key !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await getAll();
      setProjects(
        data.map((item: IProject) => {
          return {
            key: item._id,
            title: item.title,
            projectCategoryId: item.projectCategoryId.name,
            imgUrl: item.imgUrl,
            description: item.description,
            technologyId: item.technologyId,
          };
        })
      );
    })();
  }, []);
  // console.log(projects);

  return <Table columns={columns} dataSource={projects} />;
};

export default ListProjects;
