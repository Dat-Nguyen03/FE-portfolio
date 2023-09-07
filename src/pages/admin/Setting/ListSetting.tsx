import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ISetting } from "../../../interfaces/setting";
import { getSetting } from "../../../api/setting";

type Props = {};
interface DataType {
  key: string;
  logoTitle: string;
  bigTitle: string;
  smallTitle: string;
  title: string;
  copyRight: string;
  description: string;
}

const ListSetting = (props: Props) => {
  const [setting, setSetting] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Logo title",
      dataIndex: "logoTitle",
      key: "logoTitle",
    },
    {
      title: "Big title",
      dataIndex: "bigTitle",
      key: "bigTitle",
    },
    {
      title: "Small title",
      dataIndex: "smallTitle",
      key: "smallTitle",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Copyright",
      dataIndex: "copyRight",
      key: "copyRight",
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
            <Link to={`/admin/setting/edit/${record.key}`}>Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      const { data } = await getSetting();
      setSetting(
        data.map((item: ISetting) => {
          return {
            key: item._id,
            logoTitle: item.logoTitle,
            bigTitle: item.bigTitle,
            smallTitle: item.smallTitle,
            title: item.title,
            copyRight: item.copyRight,
            description: item.description,
          };
        })
      );
    })();
  }, []);

  return <Table columns={columns} dataSource={setting} />;
};

export default ListSetting;
