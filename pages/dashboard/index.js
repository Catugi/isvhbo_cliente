import Layout from '@/components/Layout';
import Link from '@/components/Link';
import MessageCard from '@/components/MessageCard';
import { API_URL } from '@/config';
import { mainBox } from '@/utils/styles/userDashboardStyles';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function UserDashboardPage({ token }) {
  // ==============================================
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const handleClearForm = () => {
    setTitle('');
    setBody('');

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        data: {
          title: title,
          body: body
        }
      }),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        setErrorMessage('Não está autorizado')
        return
      } else {
        alert(`Alguma coisa não funcionou ${res.status}`)
      }
    } else {
      alert('Mensagem enviada. Aguarde a resposta')
      router.push(`/dashboard`)
    }
  }
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
              p: 2,
              flex: 1 / 3,
              bgcolor: grey[200],
              minHeight: 600,
              display: 'flex',
              flexDirection: 'column',
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
            <Box sx={{ p: 2, flex: 1 / 3, bgcolor: grey[200], minHeight: 600 }}>
              <Typography variant='h4' textAlign={'center'}>Informações sobre suas propriedades</Typography>
              <Typography>Sua conta tem credenciais de empresário. Uma emfermidade na sua zona?</Typography>
              <Link href='/deseases/add'>Reporte aqui</Link>
            </Box>
            <Box sx={{ p: 2, flex: 1 / 3, bgcolor: grey[300], minHeight: 600 }}>
              <Typography variant='h4' textAlign={'center'}>Outras informações</Typography>
              <Box>
                <Typography variant='h6'>Deixe uma mensagem</Typography>
                <Box
                  component='form'
                  noValidate
                  sx={{ mt: 3 }}
                  onSubmit={handleSubmit}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      Título da mensagem
                      <TextField
                        name='title'
                        required
                        fullWidth
                        id='title'
                        placeholder='Título da mensagem'
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      /></Grid>
                    <Grid item xs={12} >
                      Corpo da mensagem
                      <TextField
                        multiline
                        rows={5}
                        name='body'
                        required
                        fullWidth
                        id='body'
                        placeholder='Corpo da mensagem'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Enviar
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        fullWidth
                        variant='contained'
                        sx={{
                          mt: 3, mb: 2, bgcolor: red[800], color: grey[100], ":hover": {
                            bgcolor: red[800], color: grey[100],
                          }
                        }} onClick={handleClearForm}
                      >
                        Limpar formulário
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
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

  // console.log({ message: messagesResult.data, proprieties: proprietiesResult.data, proprietors: proprietorsResult.data, users: userData })
  return {
    props: { token, messagesResult, proprietiesResult, proprietorsResult },
  };
}