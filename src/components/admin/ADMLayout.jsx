import Head from 'next/head';
import { Box, Button, Typography } from '@mui/material';
import Footer from './ADMFooter';
import Header from './Header';
import SideBar from './SideBar';
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';
import Link from '../Link';
import { useRouter } from 'next/router';
import Login from '../Login';

const sx = {};

const ADMLayout = ({ title, keywords, description, children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  return user ? (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Box sx={{ pt: 8, display: 'flex' }}>
        {user && user.isAdmin && <SideBar />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Header />
          {user && user.isAdmin ? (
            <Box>{children}</Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='h3' align='center' sx={{ ml: 30 }}>
                Permissões insuficientes para estar aqui
              </Typography>
              <Button
                variant='outlined'
                LinkComponent={Link}
                href='/'
                sx={{ ml: 30 }}
              >
                Vá para página inicial
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  ) : (
    <Login isAdminRoute={true} />
  );
};
ADMLayout.defaultProps = {
  title: 'Instituto de Serviços Veterinários ADM',
  description: '',
  keywords: '',
};
export default ADMLayout;
