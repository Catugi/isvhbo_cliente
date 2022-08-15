import Layout from '@/components/Layout';
import { API_URL } from '../../config';
import { Box } from '@mui/material';

export default function DeaseasePage({ result }) {
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
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/deseases`);
  const result = await res.json();
  // console.log(result.data);

  return {
    props: { result },
    // revalidate: 1,
  };
}
