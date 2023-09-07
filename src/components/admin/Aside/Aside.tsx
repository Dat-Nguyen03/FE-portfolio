import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;

type Props = {};

const Aside = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="py-4"
    >
      <div className="flex items-center gap-[10px] ml-2 mb-4">
        <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
          Đ
        </span>
        <div className="leading-[20px]">
          <h2 className="text-gray-200 font-[500] text-[18px]">Đạt Nguyễn</h2>
          <p className="text-gray-400 text-[14px] font-[500]">Personal</p>
        </div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        <Menu.Item>
          <Link to="/admin" className="text-xl flex items-center gap-x-2">
            <i className="ri-pie-chart-line"></i>Dash Board
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/admin/category"
            className="text-xl flex items-center gap-x-2"
          >
            <i className="ri-stack-line"></i>Categories
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/admin/projects"
            className="text-xl flex items-center gap-x-2"
          >
            <i className="ri-article-line"></i>Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/admin/services"
            className="text-xl flex items-center gap-x-2"
          >
            <i className="ri-customer-service-line"></i>Services
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/admin/setting"
            className="text-xl flex items-center gap-x-2"
          >
            <i className="ri-tools-line"></i>Setting
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/admin/about" className="text-xl flex items-center gap-x-2">
            <i className="ri-code-s-slash-fill"></i>About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/" className="text-xl flex items-center gap-x-2">
            <i className="ri-home-2-line"></i>Home Page
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Aside;
