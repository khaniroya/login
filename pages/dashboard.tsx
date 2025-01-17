import { getLoginInformation } from '@/api/account';
import { DashboardProps } from '@/Types/type';
import { Button, Divider, Spin, Typography } from 'antd';
import Image from 'next/image';
import userImage from '../app/user.png';

const Dashboard = (props: DashboardProps) => {
  if (props.userInfo === null) {
    return <Spin size="large" />;
  }
  const { Title, Paragraph } = Typography;

  const mainBoxStyle: React.CSSProperties = {
    boxShadow: 'rgb(66 66 66 / 27%) 0px 0px 6px 0px',
    width: '500px',
    backgroundColor: '#fff',
    padding: '10px 25px'
  }
  return (
    <div style={mainBoxStyle}>
      <Image
        src={userImage}
        alt="User unkown"
      />
      <div>
        <Typography>
          <Title level={5} style={{ margin: '0 ' }}>
            {props.userInfo?.firstName} {props.userInfo?.lastName}
          </Title>
          <Paragraph style={{ margin: 0 }}>
            Admin
          </Paragraph>
        </Typography>
      </div>
      <Divider />

      <div>
        <Typography style={{ textAlign: 'left' }}>
          <Title level={5} style={{ margin: '0 ' }}>
            Email:
          </Title>
          <Paragraph style={{ margin: 0 }}>

            {props.userInfo?.email}
          </Paragraph>
        </Typography>
      </div>
      <div>
        <Typography style={{ textAlign: 'left', margin: '10px 0' }}>
          <Title level={5} style={{ margin: '0 ' }}>
            Email Verified:
          </Title>
          <Paragraph style={{ margin: 0 }}>
            {props.userInfo?.emailVerified ? 'Yes' : 'No'}
          </Paragraph>
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <Button className='custom-button' size='large' style={{ flex: '1' }}>Edit</Button>
        <Button className='outline-button-color' size='large' style={{ flex: '1' }}> Log out</Button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const token = context.req.cookies.token;

  if (typeof token === 'undefined') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const response = await getLoginInformation(token);
  return response ? {
    props: {
      userInfo: response.data,
    },
  } : {
    props: {
      userInfo: null,
    },
  };
};

export default Dashboard;
