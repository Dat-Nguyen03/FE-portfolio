import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Popconfirm, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getAllServices, removeService } from "../../../api/service";
import { IService } from "../../../interfaces/service";
import { Link } from "react-router-dom";

type Props = {};
interface DataType {
  key: string;
  title: string;
  content: string;
  image: string;
  startSide: string;
}

const ListService = (props: Props) => {
  const [services, setServices] = useState<DataType[]>([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => <img src={record.image} alt="" />,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Start Side",
      dataIndex: "startSide",
      key: "startSide",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
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
            <Link to="/admin/services/add">Add</Link>
          </Button>
          <Button type="primary" className="bg-[#1677FF]">
            <Link to={`/admin/services/edit/${record.key}`}> Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const handleRemove = async (id: number | string) => {
    try {
      if (id) {
        await removeService(id);
        message.info("Đã xóa thành công!");
        setServices(services.filter((item: DataType) => item.key !== id));
      }
    } catch (error: any) {
      message.info(`Xóa thất bại ${error.message}`);
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await getAllServices();
      setServices(
        data.map((item: IService) => {
          return {
            key: item._id,
            title: item.title,
            content: item.content,
            image: item.image,
            startSide: item.startSide,
          };
        })
      );
    })();
  }, []);

  return <Table columns={columns} dataSource={services} />;
};

export default ListService;
