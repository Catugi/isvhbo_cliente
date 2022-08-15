import { Box, Button, Container, Typography } from '@mui/material';
import ADMLayout from "@/components/admin/ADMLayout";
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import ProprirteCard from '@/components/admin/PropriertCard';
import { parseCookies } from 'helpers';
import { OneK } from '@mui/icons-material';

const Propriedades = ({ result }) => {
  return <ADMLayout>
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', gap: 2
        }}
      >
        <Title>Propriedades da província que estão cadastradas</Title>
        <Button
          variant='contained'
          LinkComponent={Link}
          href='/admin/proprieties/add'
        >
          Cadastrar Nova
        </Button>
      </Box>
      {result.data && result.data.length === 0 && (
        <Typography variant='h3' align='center'>
          Sem propriedades até ao momento
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 1,
        }}
      >
        {result.data && result.data.map((proprierty) => (
          <ProprirteCard key={proprierty.id}
            name={proprierty.attributes.name}
            location={proprierty.attributes.location}
            proprietor_name={proprierty.attributes.proprietor_name}
            products={proprierty.attributes.products}
            starting_date={proprierty.attributes.starting_date}
          />
        ))}
      </Box>
    </Container>
  </ADMLayout>;
};

export default Propriedades;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/proprieties`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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
    // revalidate: 1,
  };
}