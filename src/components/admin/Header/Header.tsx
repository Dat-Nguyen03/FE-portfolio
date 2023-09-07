import { Avatar, Layout, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

type Props = {};

const AdminHeader = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      className="flex items-center justify-end"
      style={{ padding: 0, background: colorBgContainer }}
    >
      <Avatar
        className="flex items-center justify-center mr-4"
        size={50}
        icon={<UserOutlined />}
      />
    </Header>
  );
};

export default AdminHeader;
