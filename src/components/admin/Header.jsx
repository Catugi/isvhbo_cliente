import theme from '@/utils/theme';
import { LogoutOutlined } from '@mui/icons-material';
import {
  Box,
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import AuthContext from 'context/AuthContext';
import { useContext } from 'react';
import Link from '../Link';
const mdTheme = createTheme();

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          height: theme.spacing(6),
          px: 2,
        }}
      >
        <Box>
          <Typography component='h1' variant='h6' color='inherit'>
            Painel de Administração
          </Typography>
        </Box>
        <Box>
          <Button
            variant='contained'
            LinkComponent={Link}
            href='/'
            sx={{
              bgcolor: grey[800],
              color: grey[100],
              mr: 2,
              ':hover': {
                bgcolor: grey[900],
                color: grey[200],
              },
            }}
          >
            Ver Site
          </Button>
          <Button
            sx={{
              bgcolor: grey[800],
              color: grey[100],
              ':hover': {
                bgcolor: grey[900],
                color: grey[200],
              },
            }}
            onClick={() => logout()}
          >
            <LogoutOutlined />
            Sair
          </Button>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
