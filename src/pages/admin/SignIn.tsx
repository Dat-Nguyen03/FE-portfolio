import React from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { signIn } from "../../api/auth";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    // console.log("Received values of form: ", values);
    try {
      const { data: user } = await signIn(values);

      // console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      message.info(`Đăng nhập thành công! Welcome: ${user.user.name}`);
      navigate("/admin");
    } catch (error: any) {
      message.info(`Đăng nhập thất bại: ${error.response.data.message}`);
      console.log(error.message);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-2xl mb-4">Sign In Form</h1>
      <Form
        name="normal_login"
        className="login-form w-[400px]"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail không đúng định dạng!",
            },
            {
              required: true,
              message: "Vui lòng nhập E-mail!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-[#1677FF] w-full"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
