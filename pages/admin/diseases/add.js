import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL, NEXT_URL } from '@/config';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { parseCookies } from 'helpers/index';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function AddDesease({ token }) {
  const { user, error } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");;
  const router = useRouter();

  const [detectedLocal, setDetectedLocal] = useState("");
  const [description, setDescription] = useState("");
  const [treatmentType, setTreatmentType] = useState("");
  const [proprieties, setProprieties] = useState([])
  // ===================================================================


  const handleClearForm = () => {
    setDetectedLocal('');
    setDescription('');
    setTreatmentType('');
    setProprieties([]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/deseases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ detectedLocal, description, treatmentType, proprieties }),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        setErrorMessage('Não está autorizado')
        return
      }
    } else {
      router.push(`/admin/deseases`)
    }
  }
  // ===================================================================
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
          <Title>Cadastrando uma doença comunicada</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            href='/admin/diseases'
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
              <Grid item xs={12} >
                Local detectado
                <TextField
                  name='detectedLocal'
                  required
                  fullWidth
                  id='detectedLocal'
                  placeholder='Local detectado'
                  autoFocus
                  value={detectedLocal}
                  onChange={(e) => setDetectedLocal(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                Descrição
                <TextField
                  multiline
                  rows={5}
                  required
                  fullWidth
                  id='description'
                  placeholder='Descrição'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                Tipo de tratamento
                <TextField
                  required
                  fullWidth
                  id='treatmentType'
                  placeholder='Tipo de tratamento'
                  name='treatmentType'
                  value={treatmentType}
                  onChange={(e) => setTreatmentType(e.target.value)}
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
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
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

  return {
    props: {
      token,
    },
  }
}