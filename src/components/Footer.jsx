import { flexSize, secondaryBox } from "@/utils/styles/footerStyles";
import { Box, Card, Typography } from "@mui/material";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box>
      <Box sx={secondaryBox}>
        <Card sx={flexSize}>
          <Typography variant="body2" color="text.secondary" align="center">
            Informações do Rodapé nº 1
          </Typography>
        </Card>
        <Card sx={flexSize}>
          <Typography variant="body2" color="text.secondary" align="center">
            Informações do Rodapé nº 2
          </Typography>
        </Card>
        <Card sx={flexSize}>
          <Typography variant="body2" color="text.secondary" align="center">
            Informações do Rodapé nº 3
          </Typography>
        </Card>
        <Card sx={flexSize}>
          <Typography variant="body2" color="text.secondary" align="center">
            Informações do Rodapé nº 4
          </Typography>
        </Card>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        Informações do Rodapé
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
