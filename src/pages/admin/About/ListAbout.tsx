import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getAllAbout } from "../../../api/about";
import { IAbout } from "../../../interfaces/about";

type Props = {};
interface DataType {
  key: string;
  subIntro: string;
  introText: string;
  description: string;
  image: string;
}

const ListAbout = (props: Props) => {
  const [about, setAbout] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Sub intro",
      dataIndex: "subIntro",
      key: "subIntro",
    },
    {
      title: "Intro",
      dataIndex: "introText",
      key: "introText",
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => <img src={record.image} alt="" />,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="flex flex-col">
          <Button type="primary" className="bg-[#1677FF]">
            <Link to={`/admin/about/edit/${record.key}`}>Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      const { data } = await getAllAbout();
      setAbout(
        data.map((item: IAbout) => {
          return {
            key: item._id,
            subIntro: item.subIntro,
            introText: item.introText,
            description: item.description,
            image: item.image,
          };
        })
      );
    })();
  }, []);

  return <Table columns={columns} dataSource={about} />;
};

export default ListAbout;
