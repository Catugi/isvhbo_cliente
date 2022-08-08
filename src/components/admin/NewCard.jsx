import { API_URL } from '@/config';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box, Card } from '@mui/material';
import { grey } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Image from 'next/image';
import img from 'public/assets/the-devils-bridge.jpg';
import Link from '../Link';
const EventCard = ({
  title,
  body,
  usefulLinks,
  createdAt,
  updatedAt,
  author,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        gap: 1,
        p: 2,
        m: 1,
      }}
    >
      <Box>
        <Image src={img.src} height={120} width={150} alt='Sem Image'></Image>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h4'>{title}</Typography>
        </Box>
        <Box
          sx={{
            width: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              flex: 1 / 2,
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}
          >
            <Typography variant='body1'>{body}</Typography>
            <Button LinkComponent={Link} href={usefulLinks}></Button>
          </Box>
          <Box
            sx={{
              flex: 1 / 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant='body1'>Publicado em: {createdAt}</Typography>
            <Typography variant='body1'>Actualizado em: {updatedAt}</Typography>
            <Typography variant='body1'>Por: {author}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'flex-end',
          }}
        >
          <Button
            sx={{
              color: grey[900],
              bgcolor: red[700],
              width: 180,
            }}
          >
            Apagar
          </Button>
          <Button
            sx={{
              bgcolor: blue[700],
              width: 180,
              color: grey[900],
            }}
          >
            Detalhes
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default EventCard;
