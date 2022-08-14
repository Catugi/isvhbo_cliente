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
import { useContext, useState } from 'react';

const NewProprietorPage = () => {
  // const router = useRouter();

  const [values, setValues] = useState({
    fname: '', sname: '',
    lname: '', address: '',
    phone: '', bday: ''
  })
  const { error, user } = useContext(AuthContext);
  const hasEmptyFields = Object.values(values).some(
    (element) => element === ''
  )

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClearForm = (e) => {
    setValues({
      fname: '', sname: '',
      lname: '', address: '',
      phone: '', bday: ''
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
          <Title>Cadastrando um novo Empresário</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            href='/admin/proprietors'
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
              <Grid item xs={12} sm={6}>
                Primeiro Nome
                <TextField
                  autoComplete='given-name'
                  name='fname'
                  required
                  fullWidth
                  id='fname'
                  placeholder='Primeiro nome'
                  autoFocus
                  value={values.fname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Segundo Nome
                <TextField
                  required
                  fullWidth
                  id='sname'
                  name='sname'
                  autoComplete='family-name'
                  value={values.sname}
                  onChange={handleInputChange}
                  placeholder={'Segundo Nome'}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Último Nome
                <TextField
                  required
                  fullWidth
                  id='lname'
                  placeholder='Último nome'
                  name='lname'
                  autoComplete='family-name'
                  value={values.lname}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                Endereço
                <TextField
                  required
                  fullWidth
                  id='address'
                  name='address'
                  placeholder='Endereço'
                  autoComplete='address'
                  value={values.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Telefone
                <TextField
                  required
                  fullWidth
                  id='phone'
                  placeholder='Telefone'
                  name='phone'
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Data de Nascimento
                <TextField
                  type={'date'}
                  required
                  fullWidth
                  name='bday'
                  placeholder='Data de nascimento'
                  id='bday'
                  value={values.bday}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Salvar
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>

                <Button
                  fullWidth
                  type='submit'
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
      </Container>
    </ADMLayout>
  );
};
export default NewProprietorPage;
