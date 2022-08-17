import { Box, Button, Card, Typography } from '@mui/material';
import { blue, cyan, grey } from '@mui/material/colors';
import Image from 'next/image';
import img from 'public/images/the-devils-bridge.jpg';
import Link from '../Link';

const DeseaseCard = ({
  /*  image,  */ name,
  linkTo,
  detectedLocal,
  description,
  treatmentType,
  id,
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
        <Typography variant='h6'>Nome da doença {name} </Typography>
        <Typography variant='h6' align='left'>
          Local detectado: {detectedLocal}
        </Typography>
        <Box sx={{ maxHeight: 50, pr: 2 }}>
          <Typography variant='body1' align='justify' noWrap>
            {description}
          </Typography>
        </Box>
        <Typography variant='h6' align='justify'>
          {treatmentType}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            LinkComponent={Link}
            href={`/admin/diseases/${id}`}
            sx={{
              bgcolor: blue[900],
              color: grey[100],
              ':hover': { bgcolor: blue[800], color: grey[200] },
            }}
          >
            Detalhes
          </Button>{' '}
          <Button
            LinkComponent={Link}
            href={`/admin/diseases/edit/${id}`}
            sx={{
              bgcolor: cyan[900],
              color: grey[100],
              ':hover': { bgcolor: cyan[800], color: grey[200] },
            }}
          >
            Editar
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
export default DeseaseCard;
