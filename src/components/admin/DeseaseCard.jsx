import { Box, Button, Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import img from 'public/assets/the-devils-bridge.jpg';
import Link from '../Link';

const DeseaseCard = ({
  /*  image,  */
  linkTo,
  detectedLocal,
  description,
  treatmentType,
}) => {
  return (
    <Card
      sx={{
        width: 400,
        height: 200,
        bgcolor: grey[200],
        display: 'flex',
        gap: 2,
        p: 1,
      }}
      elevation={0}
    >
      <Box>
        <Image src={img.src} width={200} height={200} alt={'Sem Imagem'} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h6' align='left'>
          Local detectado: {detectedLocal}
        </Typography>
        <Typography variant='body1' align='justify'>
          {description}
        </Typography>
        <Typography variant='body1' align='justify'>
          {treatmentType}
        </Typography>
        <Button variant='outilined' LinkComponent={Link} href={linkTo}>
          Editar
        </Button>
      </Box>
    </Card>
  );
};
export default DeseaseCard;
