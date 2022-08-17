import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
// import { parseCookies } from 'helpers';

import porcodoente from 'public/images/PatoDoente.jpg';

export default function DoencasDetailPage({ result }) {
  return (
    <ADMLayout>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Title>Detalhes da doenças</Title>
          <Button variant='contained' LinkComponent={Link} href={'/admin/diseases'}>
            Ver todas
          </Button>
        </Box>
        <Box>
          {result.data && <Typography variant='h4'> {result.data.attributes.detectedLocal}  </Typography>}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Image width={500} height={400} alt='' src={porcodoente.src} />
            <Box sx={{ flex: 3 }}>
              <Typography > {result.data.attributes.description} </Typography>
              <Typography variant='h6'>
                Formas de tratamento: {result.data.attributes.treatmentType ?
                  (result.data.attributes.treatmentType) :
                  ("Não existem ainda")}
              </Typography>

              <Typography variant='h6'>
                Publicado em: {result.data.attributes.createdAt}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ADMLayout>
  );
};


export async function getServerSideProps({ params: { id }, req }) {
  const res = await fetch(`${API_URL}/deseases/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const result = await res.json();
  /* if (res.ok) {
    console.log(result.data);
  } else {
    console.log(result.error.status)
  } */
  return {
    props: { result },
  };
}
