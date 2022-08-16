import EventCard from '@/components/EventCard';
import Layout from '@/components/Layout';
import { mainBox, eventsBox } from '@/utils/styles/eventStyle';
import { Box, Container, Typography } from '@mui/material';
import { parseCookies } from 'helpers';
import { API_URL } from '../../config/';

export default function EventsPage({ result }) {
  return (
    <Layout>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box sx={{ flex: 2 }}>

          <Typography textTransform={'uppercase'} variant='h4' align='center'>
            Últimos Eventos
          </Typography>
          {result.data && result.data.length === 0 && (
            <Typography variant='h3' align='center'>
              Sem eventos para mostrar
            </Typography>
          )}

          <Container sx={eventsBox}>
            {result.data && result.data.map((evt) => (
              <EventCard
                id={evt.id}
                key={evt.id}
                title={evt.attributes.title}
                description={evt.attributes.description}
                initialDate={evt.attributes.start_time}
                finalDate={evt.attributes.end_time}
              />
            ))}
          </Container>
        </Box>
        <Box sx={{ pt: 5, flex: 1 / 2 }}>
          <Typography variant='h5'>Outras informações</Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/events?populate=*`, {
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
  };
}
