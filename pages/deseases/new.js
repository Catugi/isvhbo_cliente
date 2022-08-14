import Layout from '@/components/Layout';
import { AccountBox } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AuthContext from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const NewDesease = () => {
  const router = useRouter();
  const [detectedLocal, setdetectedLocal] = useState('');
  const [description, setDescription] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [image, setImage] = useState('');
  const [proprieties, setProprieties] = useState([]);
  const { register, error, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <Container component='main' maxWidth='md' sx={{ minHeight: 520, mb: 10 }}>
        <Box
          sx={{
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

          <Box component='form' noValidate sx={{ mt: 3 }}>
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
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar-se
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default NewDesease;
