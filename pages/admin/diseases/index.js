import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import { API_URL } from '@/config';
import { Box, Button, Container, Typography } from '@mui/material';
import DeseaseCard from '@/components/admin/DeseaseCard';
import Link from '@/components/Link';

export default function MostRelevantDiseases({ result }) {
  return (
    <ADMLayout>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title>Doenças até agora detectadas e publicadas</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            href='/admin/diseases/add'
          >
            Detectada uma nova
          </Button>
        </Box>
        {result.data && result.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem doenças cadastradas
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
          {result.data && result.data.map((desease) => (
            <DeseaseCard
              key={desease.id}
              // image={desease.attributes.image}
              detectedLocal={desease.attributes.detectedLocal}
              description={desease.attributes.description}
              treatmentType={desease.attributes.treatmentType}
            />
          ))}
        </Box>
      </Container>
    </ADMLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/deseases`);
  const result = await res.json();
  // console.log(result.data);

  return {
    props: { result },
    // revalidate: 1,
  };
}
