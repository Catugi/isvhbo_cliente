import { Box, Button, Container, Typography } from '@mui/material';
import ADMLayout from "@/components/admin/ADMLayout";
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import ProprirteCard from '@/components/admin/PropriertCard';

const Propriedades = ({ proprieties }) => {
  return <ADMLayout>
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title>Propriedades da província que estão cadastradas</Title>
        <Button
          variant='contained'
          LinkComponent={Link}
          href='/admin/proprieties/new'
        >
          Cadastrar Nova
        </Button>
      </Box>
      {proprieties.data.length === 0 && (
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
        {proprieties.data.map((proprierty) => (
          <ProprirteCard
            id={proprierty.id}
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/proprieties`);
  const proprieties = await res.json();
  console.log(proprieties.data);

  return {
    props: { proprieties },
    revalidate: 1,
  };
}