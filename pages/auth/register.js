import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from '@/components/Layout';
import { AccountBox } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
// ============================================
import AuthContext from 'context/AuthContext';

export default function RegisterPage() {
  /* const [firstName, setFirtName] = useState('');
  const [lastName, setLastName] = useState(''); */
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { register, error } = useContext(AuthContext);

  // useEffect(() => error);

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
          <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
            <AccountBox />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Criar uma conta
          </Typography>
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
