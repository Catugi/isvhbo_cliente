import {
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "../Link";
const mdTheme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <AppBar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          height: mdTheme.spacing(6),
          pl: 32,
        }}
      >
        <Typography component='h1' variant='h6' color='inherit'>
          Painel de Administração
        </Typography>
        <Button
          variant='contained'
          LinkComponent={Link}
          href='/'
          sx={{
            bgcolor: grey[200],
            color: grey[900],
            height: mdTheme.spacing(4),
            mr: 2,
          }}
        >
          Ver Site
        </Button>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
