import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function AddProprietorPage({ token }) {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [modifiedData, setModifiedData] = useState({
    fname: '', sname: '',
    lname: '', address: '',
    phone: '', bday: ''
  })
  const { error, user } = useContext(AuthContext);
  const hasEmptyFields = Object.values(modifiedData).some(
    (element) => element === ''
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/proprietors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: modifiedData
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
      router.push(`/admin/proprietors`)
    }
  };
  const handleClearForm = (e) => {
    setModifiedData({
      fname: '', sname: '',
      lname: '', address: '',
      phone: '', bday: ''
    });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setModifiedData({ ...modifiedData, [name]: value })
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
                  value={modifiedData.fname}
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
                  value={modifiedData.sname}
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
                  value={modifiedData.lname}
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
                  value={modifiedData.address}
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
                  value={modifiedData.phone}
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
                  value={modifiedData.bday}
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
export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  console.log(token)
  return {
    props: {
      token,
    },
  }
}
