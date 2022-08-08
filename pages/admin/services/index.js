import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { Box } from '@mui/material';
import { Button, Container } from '@mui/material';

const ServicesPage = () => {
  return (
    <ADMLayout>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title>Serviços requisitados</Title>
          <Button variant='contained' LinkComponent={Link} href='#'>
            Ver mais
          </Button>
        </Box>
      </Container>
    </ADMLayout>
  );
};

export default ServicesPage;
