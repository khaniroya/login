import { Button, Layout, Typography } from "antd";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { Header, Sider, Content, Footer } = Layout;
    const { Title, Paragraph, Text } = Typography;

    const mainStyle: React.CSSProperties =
    {
        flex: 1, width: '70%',
        margin: '4vh auto',
        boxShadow: 'rgb(66 66 66 / 27%) 0px 0px 6px 0px'
    };

    const contentStyle: React.CSSProperties = {
        margin: '100px auto',
        padding: '35px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        backgroundColor: '#264697',
        padding: '0 35px'
    };
    const siderStyleInternal: React.CSSProperties = {
        textAlign: 'center',
        color: '#ffffff'
    };
    const siderStyleTitle: React.CSSProperties = {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: '30px'
    };

    const footerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    return (
        <Layout>
            <Layout style={mainStyle}>
                <Sider width="45%" style={siderStyle}>
                    <Typography>
                        <Title level={2} style={siderStyleTitle}>Welcome to the website</Title>
                        <Paragraph style={siderStyleInternal}>
                            Lorem ipsum is a placeholder text. It is also called filler text or dummy text. Many people find it difficult to focus on the design and layout when there is readable content.
                        </Paragraph>
                        <Button size="large" className="outline-button">Sign up</Button>
                    </Typography>
                </Sider>
                <Content style={contentStyle}>
                    {children}
                </Content>

            </Layout>
            <Footer style={{padding:'13px 0'}}>
                <Typography style={footerStyle}>
                    <Paragraph style={{ margin: 0 }}>
                        Designed by
                    </Paragraph>
                    <Title level={5} style={{ margin: '0 5px', color:'#264697' }}>
                        RMkh
                    </Title>
                </Typography>
            </Footer>
        </Layout>
    );
}
