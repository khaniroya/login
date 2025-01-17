import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Content, Footer } = Layout;
  const mainStyle: React.CSSProperties =
  {
    flex: 1, width: '70%',
    margin: '0 auto',
  };
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    margin: '58px auto',
    padding: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
    <Layout>
      <Layout style={mainStyle}>
        <Content style={contentStyle}>
          {children}
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Login Page ©{new Date().getFullYear()} Created by Programmer
      </Footer>
    </Layout>
  );

}
