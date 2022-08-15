import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from '@/components/Layout';
import { AccountBox } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
// ============================================
import AuthContext from 'context/AuthContext';
import Link from '@/components/Link';
import { useRouter } from 'next/router';
import { grey, red } from '@mui/material/colors';

export default function RegisterPage() {
  /* const [firstName, setFirtName] = useState('');
  const [lastName, setLastName] = useState(''); */
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { register, error, user } = useContext(AuthContext);
  const message =
    error && error.message.includes('Email')
      ? 'Esse email já está em uso'
      : 'Ocorreu um erro durante a craiação da conta. Certifique que informou um email válido e que a sua senha tem ao menos 6 caracteres';

  useEffect(() => {
    error;
  }, [error]);

  user && router.push('/');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return;
    }
    register({ username, email, password });
  };

  return (
    <Layout>
      <Container component='main' maxWidth='md' sx={{ minHeight: 520, mb: 10 }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: grey[900] }}>
            <AccountBox />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Criar uma conta
          </Typography>
          {error && (
            <Typography
              sx={{
                bgcolor: red[600],
                color: red[100],
                textAlign: 'center',
              }}
            >
              {message}
            </Typography>
          )}
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Primeiro nome'
                  autoFocus
                /*  value={firstName}
                onChange={(e) => setFirtName(e.target.value)} */
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Último nome'
                  name='lastName'
                  autoComplete='family-name'
                /* value={lastName}
                onChange={(e) => setLastName(e.target.value)} */
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type={'email'}
                  required
                  fullWidth
                  id='email'
                  label='Enderço de Email'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='username'
                  label='Nome de usuário'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Senha'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='passwordConfirm'
                  label='Confirme sua senha'
                  type='password'
                  id='passwordConfirm'
                  autoComplete='new-password'
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='Quero receber notificações sobre novidades na empresa.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar-se
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/auth/login' variant='body2'>
                  Já tem uma conta? Faça login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
