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
const NewCard = ({ new_ }) => {
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
          <Typography variant='h4'>{new_.title}</Typography>
        </Box>
        <Box
          sx={{
            width: 700,
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
            <Typography variant='body1'>{new_.body}</Typography>
            <Button LinkComponent={Link} href={new_.usefulLinks}></Button>
          </Box>
          <Box
            sx={{
              flex: 1 / 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant='body1'>
              Publicado em: {new_.createdAt}
            </Typography>
            <Typography variant='body1'>
              Actualizado em: {new_.updatedAt}
            </Typography>
            <Typography variant='body1'>Por: {new_.author}</Typography>
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

export default NewCard;
