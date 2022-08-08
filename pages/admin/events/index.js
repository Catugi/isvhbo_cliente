import ADMLayout from '@/components/admin/ADMLayout';
import EventCard from '@/components/admin/EventCard';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import { eventsBox, mainBox } from '@/utils/styles/eventStyle';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export default function EventsPage({ events }) {
  return (
    <ADMLayout>
      <Box sx={mainBox}>
        <Box
          sx={{
            mr: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Title>Últimos Eventos</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            noLinkStyle
            href='/admin/events/new'
          >
            Adicionar novo
          </Button>
        </Box>
        {events.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem eventos para mostrar
          </Typography>
        )}

        <Container sx={eventsBox}>
          {events.data.map((evt) => (
            <EventCard
              key={evt.id}
              title={evt.attributes.title}
              description={evt.attributes.description}
              start_date={evt.attributes.start_date}
              start_time={evt.attributes.start_time}
              end_date={evt.attributes.end_date}
              end_time={evt.attributes.end_time}
              usefulLinks={evt.attributes.usefulLinks}
            />
          ))}
        </Container>
      </Box>
    </ADMLayout>
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
