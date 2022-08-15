import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@/components/Link';
import { LoginOutlined } from '@mui/icons-material';

// =================================================7
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthContext from 'context/AuthContext';
import { grey } from '@mui/material/colors';
// =================================================

export default function Login({ isAdminRoute }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, user } = useContext(AuthContext);
  useEffect(() => {
    error;
  }, [error]);
  user && router.push('/');
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Container component='main' maxWidth='xs' sx={{ minHeight: 520, mb: 10 }}>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: grey[800] }}>
          <LoginOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Entrar
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          {/*  <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Lembrar minha sessão'
          /> */}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Grid container>
            {/*  <Grid item xs>
              <Link href='#' variant='body2'>
                Esqueceu a Senha?
              </Link>
            </Grid> */}
            {isAdminRoute && (
              <>
                <Grid item sx={12}>
                  <Typography variant='h5'>Não tem credenciais?</Typography>
                </Grid>
                <Grid>
                  <Button LinkComponent={Link} href='/'>
                    Visite o site
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
