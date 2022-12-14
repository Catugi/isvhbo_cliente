import { Box, Button, Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import Link from './Link';

import img from 'public/images/Background.jpg';

const style = {
  width: '90%',
  height: 200,
  m: 1,
  pl: 1,
  bgcolor: grey[300],
  display: 'flex',
  flexDirection: 'column',
};

const NewCard = ({ id, title, description, publisher, date }) => {
  return (
    <Card sx={style}>
      <Typography variant='h5' align='center'>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box flex={1 / 4}>
          <Image width={170} height={120} src={img.src} alt='Sem Imagem' />
        </Box>
        <Box flex={2 / 4}>
          <Typography variant='body1' align='center'>
            {description}
          </Typography>
        </Box>
        <Box
          flex={1 / 4}
          sx={{
            display: 'flex',
            // alignItems: 'flex-end',
            // justifyContent: 'flex-end',
          }}
        >
          <Button variant='contained' LinkComponent={Link} href={`/news/${id}`}>
            Detalhes
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' align='center' position={'sticky'}>
          Publicado por {publisher} em {date}
        </Typography>
      </Box>
    </Card>
  );
};

export default NewCard;
