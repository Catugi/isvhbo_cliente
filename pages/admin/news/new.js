import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const OtherNewPage = () => {
  const { error, user } = useContext(AuthContext);
  const router = useRouter();
  const [values, setValues] = useState({
    title: '', body: '',
    usefulLinks: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClearForm = (e) => {
    setValues({
      title: '', body: '',
      usefulLinks: '', address: '',
      joinedAt: '', bday: ''
    });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return (
    <ADMLayout>
      <Container component='main' maxWidth='md' sx={{ minHeight: 520, mb: 10 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title>Cadastrando uma nova notícia ...</Title>
          <Button variant='contained' LinkComponent={Link} href='/admin/news'>
            Ver Todas
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='form'
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                Título
                <TextField
                  name='title'
                  required
                  fullWidth
                  id='title'
                  placeholder='Título da notícia'
                  autoFocus
                  value={values.title}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                Corpo da notícia
                <TextField
                  multiline
                  rows={5}
                  required
                  fullWidth
                  id='body'
                  placeholder='Descrição do evento'
                  name='body'
                  value={values.body}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} >
                Ligações úteis
                <TextField
                  required
                  fullWidth
                  id='usefulLinks'
                  placeholder='Links úteis'
                  name='usefulLinks'
                  value={values.usefulLinks}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item sx={12} sm={6}>

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item sx={12} sm={6}>

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    mt: 3, mb: 2, bgcolor: red[900], color: grey[100],
                    ":hover": { bgcolor: red[800], color: grey[200] }
                  }} onClick={handleClearForm}
                >
                  Limpa formulário
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ADMLayout>
  );
};
export default OtherNewPage;
