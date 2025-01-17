import { AppProps } from 'next/app';
import '../app/globals.css';
import RootLayout from '@/Layout/layout';
import LoginLayout from '@/Layout/loginLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { name } = Component;

  return (
    <>
      {name === "LoginPage" ? (
        <LoginLayout>
          <Component {...pageProps} />
        </LoginLayout>
      ) : (
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      )}
    </>
  );
};

export default MyApp;
