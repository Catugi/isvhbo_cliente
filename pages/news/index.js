import NewCard from '@/components/NewCard';
import Layout from '@/components/Layout';
import { eventsBox } from '@/utils/styles/eventStyle';
import { Box, Button, Card, Container, Typography } from '@mui/material';
import { API_URL } from '../../config';
import Link from '@/components/Link';

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
        <Box
          sx={{
            flex: 4,
          }}
        >
          {news.data.map((singlenew) => (
            <NewCard
              key={singlenew.id}
              title={singlenew.attributes.title}
              description={singlenew.attributes.body}
              date={singlenew.attributes.createdAt}
              publisher={'Evaristo'}
            />
          ))}
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Card
            sx={{
              widt: '100%',
            }}
          >
            <Typography variant='h5'>Informações úteis</Typography>
            {/* <Button
              variant='outilined'
              LinkComponent={Link}
              href='#'
              sx={{
                bgcolor: 'inherit',
              }}
            >
              Ver mais antigas
            </Button> */}
            <Link href='#' noLinkStyle textDecoration='none'>
              Ver mais antigas
            </Link>
          </Card>
        </Box>
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
