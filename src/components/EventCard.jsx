import { Box, Button, Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import Link from './Link';

const style = {
  width: 450,
  height: 200,
  mx: 0.5,
  my: 1,
  bgcolor: grey[300],
  display: 'flex',
  flexDirection: 'column',
};

const EventCard = ({
  id,
  title,
  publisher,
  description,
  date,
  initialDate,
  finalDate,
  interests,
}) => {
  return (
    <Card sx={style}>
      <Typography variant='h4' align='center'>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Box>{/* <Image width={200} height={200} src={image} alt='' /> */}</Box>
        <Box>
          <Typography variant='body1' align='center'>
            {description}
          </Typography>

          <Typography variant='body2' align='center' position={'sticky'}>
            O Evento decorrerá desde {initialDate} até {finalDate}
          </Typography>
          <Typography variant='body2' align='center' position={'sticky'}>
            Publicado por {publisher} Em {date}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography>Interesses: {interests} </Typography>
            <Button LinkComponent={Link} href={`/events/${id}`}>
              Ver mais aqui
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default EventCard;
