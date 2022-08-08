import NewCard from '@/components/NewCard';
import Layout from '@/components/Layout';
import { eventsBox } from '@/utils/styles/eventStyle';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { API_URL } from '../../config';

export default function NewsPage({ news }) {
  return (
    <Layout>
      <Typography textTransform={'uppercase'} variant='h3' align='center'>
        Últimas Notícias
      </Typography>
      {news.data.length === 0 && (
        <Typography variant='h2' align='center'>
          Sem novas notícias nos útlimos 5 dias
        </Typography>
      )}

      <Container sx={eventsBox}>
        {news.data.map((singlenew) => (
          <NewCard
            key={singlenew.id}
            title={singlenew.attributes.title}
            publisher={'Fernando'}
          />
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/news`);
  const news = await res.json();
  console.log(news.data);
  return {
    props: { news },
    revalidate: 1,
  };
}
