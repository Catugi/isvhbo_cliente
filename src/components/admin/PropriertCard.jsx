import { Box, Button, Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import logo from 'public/images/Porco.jpg';
import Link from '../Link';
const PropriertCard = ({
  name,
  imageLink,
  location,
  proprietor_name,
  products,
  starting_date,
}) => {
  return (
    <Card sx={{ p: 2, width: 500, display: 'flex', bgcolor: grey[200] }}>
      <Box sx={{ flex: 1 }}>
        <Image width={150} height={150} alt='Sem Logo' src={logo.src} />
      </Box>
      <Box
        sx={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6' textAlign={'center'}>
          {name}
        </Typography>
        <Typography variant='h6' textAlign={'center'}>
          Localizada em: {location}
        </Typography>
        <Typography variant='h6' textAlign={'center'}>
          Dono: {proprietor_name}
        </Typography>
        <Typography variant='h6' textAlign={'center'}>
          Produtos produzidos: {products}
        </Typography>
        <Typography variant='h6' textAlign={'center'}>
          Começou em {starting_date}
        </Typography>
        <Button variant='outlined' LinkComponent={Link} href='#'>
          Ver detalhes
        </Button>
      </Box>
    </Card>
  );
};
export default PropriertCard;
