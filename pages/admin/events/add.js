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
  Typography,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
// import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers';
import { useRouter } from 'next/router';
import { /* useContext, */ useState } from 'react';

export default function AddEventPage({ token }) {
  const router = useRouter();
  const [modifiedData, setModifiedData] = useState({
    title: '', description: '',
    usefulLinks: '', start_date: '',
    end_date: ''
  });

  const [errorMessage, setErrorMessage] = useState("")

  /* const { error, user } = useContext(AuthContext);
  const hasEmptyFields = Object.values(modifiedData).some(
    (element) => element === ''
  )
 */
  const handleClearForm = (e) => {
    setModifiedData({
      title: '', description: '',
      usefulLinks: '', start_date: '',
      end_date: '',
    });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: modifiedData }),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        setErrorMessage('Não está autorizado')
        return
      } else (`${res.status}`)
    } else {
      router.push(`/admin/events`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedData({ ...modifiedData, [name]: value });
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
          <Title>Cadastrando um novo Evento ...</Title>
          <Button variant='contained' LinkComponent={Link} href='/admin/events'>
            Ver Todos
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {errorMessage !== '' && <Typography sx={{
            bgcolor: red[900],
            color: grey[20],
          }}></Typography>}
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
                  placeholder='Título do evento'
                  autoFocus
                  value={modifiedData.title}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                Descrição
                <TextField
                  multiline
                  rows={5}
                  required
                  fullWidth
                  id='description'
                  placeholder='Descrição do evento'
                  name='description'
                  value={modifiedData.description}
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
                  value={modifiedData.usefulLinks}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                Hora de início
                <TextField
                  required
                  type={'datetime-local'}
                  fullWidth
                  name='start_time'
                  id='start_time'
                  value={modifiedData.start_time}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Hora de término
                <TextField
                  required
                  type={'datetime-local'}
                  fullWidth
                  name='end_time'
                  id='end_time'
                  value={modifiedData.end_time}
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


export async function getServerSideProps({ req }, { query: { id } }) {
  const { token } = parseCookies(req)
  // console.log(token)
  return {
    props: { token },
  };
}
