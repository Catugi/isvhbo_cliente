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

export default function NewsAddPage({ result }) {
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
            href='/admin/news/add'
          >
            Adicionar nova
          </Button>
        </Box>
        {result.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem notícias para mostrar
          </Typography>
        )}

        <Container sx={eventsBox}>
          {result.data.map((item) => (
            <NewCard key={item.id} new_={item} />
          ))}
        </Container>
      </Box>
    </ADMLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/news?_sort=date:ASC&_limit=5`);
  const result = await res.json();
  // console.log(result.data);

  return {
    props: { result },
    revalidate: 1,
  };
}
