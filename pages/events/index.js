import EventCard from '@/components/EventCard';
import Layout from '@/components/Layout';
import { mainBox, eventsBox } from '@/utils/styles/eventStyle';
import { Box, Container, Typography } from '@mui/material';
import { parseCookies } from 'helpers';
import { API_URL } from '../../config/';

export default function EventsPage({ result }) {
  return (
    <Layout>
      <Box sx={mainBox}>
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
              key={evt.id}
              title={evt.title}
              publisher={'Fernando'}
              description={'Evento a decorres sob o lema'}
              initialDate={'11/07/2022'}
              finalDate={'11/07/2022'}
              date={'11/07/2022'}
            />
          ))}
        </Container>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const result = await res.json();
  if (res.ok) {
    console.log(result.data);
  } else {
    console.log(result.error.status)
  }
  return {
    props: { result },
  };
}
