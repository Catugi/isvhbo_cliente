import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@/components/Link';
import Layout from '@/components/Layout';
import { LoginOutlined } from '@mui/icons-material';

// =================================================7
import AuthContext from 'context/AuthContext';
import { useContext, useEffect, useState } from 'react';
// =================================================

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);
  // useEffect(() => error);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Layout>
      <Container component='main' maxWidth='xs' sx={{ minHeight: 520, mb: 10 }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Entrar
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Nome de Usuário ou email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Lembrar minha sessão'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Esqueceu a Senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/auth/register' variant='body2'>
                  {'Não tem uma conta? Crie uma'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
