import Layout from '@/components/Layout';
import Link from '@/components/Link';
import MessageCard from '@/components/MessageCard';
import { API_URL } from '@/config';
import { mainBox } from '@/utils/styles/userDashboardStyles';
import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers';
import { useContext } from 'react';

export default function UserDashboardPage() {
  // ==============================================
  const { user } = useContext(AuthContext);




  // ===================================================

  return (
    <Layout>
      <Box sx={mainBox}>
        {!user ? (
          <Typography variant='h4' align='center'>
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              minHeight: 800, gap: 1,
              p: 1
            }}
          >
            <Box sx={{
              flex: 1 / 3,
              bgcolor: grey[500], border: `${grey[400]} solid 2px`,
              minHeight: 600,
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-between',
              alignItems: 'flex-start'

            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h4' textAlign={'center'}>Mensagens e Contactos </Typography>

              </Box>
              <Box sx={{ width: '100%' }}>
                <MessageCard
                  title={'Pretendo inscrever a minha empresa'}
                  body={'Face a recepção da documentação agradecia que me fosse '}
                  status={'Lido'}
                />
              </Box>
            </Box>
            <Box sx={{ flex: 1 / 3, bgcolor: grey[400], minHeight: 700 }}>
              <Typography variant='h4' textAlign={'center'}>Informações sobre suas propriedades</Typography>
            </Box>
            <Box sx={{ flex: 1 / 3, bgcolor: grey[300], minHeight: 700 }}>
              <Typography variant='h4' textAlign={'center'}>Outras informações</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  const mRes = await fetch(`${API_URL}/messages?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const proprietyRes = await fetch(`${API_URL}/proprieties?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const usersRes = await fetch(`${API_URL}/users?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const proprietorRes = await fetch(`${API_URL}/proprietors?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });


  const messagesResult = await mRes.json();

  const proprietiesResult = await proprietyRes.json();
  const proprietorsResult = await proprietorRes.json();
  const userData = await usersRes.json();

  console.log({ message: messagesResult.data, proprieties: proprietiesResult.data, proprietors: proprietorsResult.data, users: userData })
  return {
    props: { token, messagesResult, proprietiesResult, proprietorsResult },
  };
}