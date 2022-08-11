import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { mainBox } from '@/utils/styles/userDashboardStyles';
import { Box, Button, Typography } from '@mui/material';
import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

const UserDashboardPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <Box sx={mainBox}>
        <Box
          sx={{
            display: 'flex',
            aligItems: 'center',
          }}
        >
          {!user ? (
            <Typography variant='h3' align='center'>
              Ainda não tem uma conta? Cadastre-se para poder registar suas
              actividades. Ou Faça login
              <Button
                href={'/auth/login'}
                LinkComponent={Link}
                noLinkStyle
                align='center'
                sx={{
                  fontSize: 24,
                }}
              >
                Aqui
              </Button>
            </Typography>
          ) : (
            <Box>
              <Typography variant='h4' align='center'>
                Ainda não tem registros de actividades
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default UserDashboardPage;
