import { getUserInformation } from '@/api/account';
import { ActionType, UserData } from '@/Types/type';
import { openNotification } from '@/Utils/notification';
import { Button, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { Title, Text } = Typography;

  const onFinish = async (values: UserData) => {
    setLoading(true)
    const getUserData = await getUserInformation(values);
    if (typeof getUserData === 'undefined') {
      return;
    } else {
      openNotification('Success', 'You login successfully', ActionType.Success);
      router.push('/dashboard');
      setLoading(false)
    }
  };

  return (
    <div className='container-div'>
      <div style={{ marginBottom: '25px' }}>
        <Title level={3} style={{ margin: 0, textAlign: 'left' }}>Sign in to your account</Title>
        <Text style={{ color: '#686868', paddingBottom: '10px' }}>Please enter your details</Text>
      </div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="User name"
          name="username"
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button size="large" className="custom-button" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
