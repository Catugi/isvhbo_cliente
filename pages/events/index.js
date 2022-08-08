import EventCard from '@/components/EventCard';
import Layout from '@/components/Layout';
import { eventsBox, mainBox } from '@/utils/styles/eventStyle';
import { Box, Container, Typography } from '@mui/material';
import { API_URL } from '../../config/';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <Box sx={mainBox}>
        <Typography textTransform={'uppercase'} variant='h4' align='center'>
          Últimos Eventos
        </Typography>
        {events.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem eventos para mostrar
          </Typography>
        )}

        <Container sx={eventsBox}>
          {events.data.map((evt) => (
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  console.log(events.data);

  return {
    props: { events },
    revalidate: 1,
  };
}
