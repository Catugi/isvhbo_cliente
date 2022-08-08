import Head from 'next/head';
import { Box } from '@mui/material';
import Footer from './ADMFooter';
import Header from './Header';
import SideBar from './SideBar';

const sx = {};

const ADMLayout = ({ title, keywords, description, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Box sx={{ pt: 8, display: 'flex' }}>
        <SideBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Header />
          <Box>{children}</Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
ADMLayout.defaultProps = {
  title: 'Instituto de Serviços Veterinários ADM',
  description: '',
  keywords: '',
};
export default ADMLayout;
