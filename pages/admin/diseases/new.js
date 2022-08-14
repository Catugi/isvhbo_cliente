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
import { useRouter } from 'next/router';
import { useState } from 'react';

const NewDesease = () => {
  const router = useRouter();
  // ===================================================================
  const [values, setValues] = useState({
    detectedLocal: '',
    description: '',
    treatmentType: '',
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleClearForm = (e) => {
    const { name, value } = e.target
    setValues({ detectedLocal: '', description: '', treatmentType: '' })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()


    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
    }

    const res = await fetch(`${API_URL}/api/deseases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        return
      }
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
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
                  value={values.detectedLocal}
                  onChange={handleInputChange}
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
                  value={values.description}
                  onChange={handleInputChange}
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
                  value={values.treatmentType}
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
export default NewDesease;
