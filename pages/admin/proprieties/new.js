import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const NewProprietyPage = () => {
  const router = useRouter();
  const { error, user } = useContext(AuthContext);


  const [values, setValues] = useState({
    name: '', location: '',
    products: '', proprietor_name: '',
    starting_date: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClearForm = (e) => {
    setValues({
      name: '', location: '',
      products: '', proprietor_name: '',
      starting_date: ''
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
          <Title>Cadastrando uma nova Propriedade ...</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            href='/admin/proprieties'
          >
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
              <Grid item xs={12}>
                Nome da Propriedade
                <TextField
                  autoComplete='given-name'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  placeholder='Nome da Propriedade'

                  value={values.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} >
                Localização da Propriedade
                <TextField
                  required
                  fullWidth
                  id='location'
                  placeholder='Localização da Propriedade'
                  name='location'
                  value={values.location}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                Produtos destacados da empresa
                <TextField

                  required
                  fullWidth
                  id='products'
                  placeholder='Produtos destacados separados por ","'
                  name='products'
                  value={values.products}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Proprietário
                <TextField
                  required
                  fullWidth
                  id='proprietor_name'
                  placeholder='Nome de proprietário'
                  name='proprietor_name'
                  value={values.proprietor_name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Data do início de funcionamento
                <TextField
                  type={'date'}
                  required
                  fullWidth
                  name='starting_date'

                  id='starting_date'

                  value={values.starting_date}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
export default NewProprietyPage;
