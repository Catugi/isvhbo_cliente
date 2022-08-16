import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Card, Typography } from '@mui/material';
import Link from '@/components/Link';
import { firstSection, secondSection } from '@/utils/styles/homepageStyles';
import Layout from '@/components/Layout';
import { WhatsappOutlined, FacebookOutlined } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
// ====================================================
import AuthContext from 'context/AuthContext';
// ====================================================

export default function Index() {
  const { user } = React.useContext(AuthContext);
  return (
    <Layout>
      <Box>
        <Box sx={firstSection}>
          <Box>
            <Typography variant='h3' align='center'>
              Instituto dos Serviços Veterinários do Huambo
            </Typography>
            <Typography variant='body1' align='center'>
              Veja as novidades do mundo da produção animal no Huambo
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button
              variant='outlined'
              LinkComponent={Link}
              href='#'
              sx={{ bgcolor: 'inherit' }}
            >
              Veja mais aqui
            </Button>

            {!user && (
              <Button
                variant='outlined'
                LinkComponent={Link}
                href='/auth/register'
                sx={{ bgcolor: 'inherit' }}
              >
                Crie uma conta
              </Button>
            )}
          </Box>
        </Box>

        <Box sx={secondSection}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h3'>Contacte-nos</Typography>
            <Typography variant='h4'>
              Whatsapp <WhatsappOutlined />
            </Typography>
            <Typography variant='h4'>
              Facebook <FacebookOutlined />
            </Typography>
            <Typography variant='h4'>
              Instagram <Instagram />
            </Typography>
            <Typography variant='h4'>
              Twiter <Twitter />
            </Typography>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
}
