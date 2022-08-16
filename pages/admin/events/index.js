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
import { parseCookies } from 'helpers';

export default function EventsPage({ result }) {
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
            href='/admin/events/add'
          >
            Adicionar novo
          </Button>
        </Box>
        {result.data && result.data && result.data.length === 0 && (
          <Typography variant='h3' align='center'>
            Sem eventos para mostrar
          </Typography>
        )}

        <Container sx={eventsBox}>
          {result.data && result.data.map((evt) => (
            <EventCard
              key={evt.id}
              title={evt.attributes.title}
              description={evt.attributes.description}
              start_time={evt.attributes.start_time}
              end_time={evt.attributes.end_time}
              usefulLinks={evt.attributes.usefulLinks}
            />
          ))}
        </Container>
      </Box>
    </ADMLayout>
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
