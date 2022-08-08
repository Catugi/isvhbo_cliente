import Layout from '@/components/Layout';
import { API_URL } from '../../config';
import { Box } from '@mui/material';

export default function DeaseasePage({ deseases }) {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      ></Box>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/deseases`);
  const deseases = await res.json();
  console.log(deseases.data);

  return {
    props: { deseases },
    revalidate: 1,
  };
}
