import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import NewCard from '@/components/admin/NewCard';
import { API_URL } from '@/config';
import { eventsBox, mainBox } from '@/utils/styles/eventStyle';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export default function news_dataPage({ news_data }) {
  return (
    <ADMLayout>
      <Box sx={mainBox}>
        <Box
          sx={{
            mr: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Title> Últimas notícias </Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            noLinkStyle
            href='/admin/news/new'
          >
            Adicionar nova
          </Button>
        </Box>
        {news_data.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem notícias para mostrar
          </Typography>
        )}

        <Container sx={eventsBox}>
          {news_data.data.map((item) => (
            <NewCard new_={item} />
          ))}
        </Container>
      </Box>
    </ADMLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/news?_sort=date:ASC&_limit=5`);
  const news_data = await res.json();
  console.log(news_data.data);

  return {
    props: { news_data },
    revalidate: 1,
  };
}
