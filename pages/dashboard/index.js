import Layout from "@/components/Layout";
import Link from "@/components/Link";
import { mainBox } from "@/utils/styles/userDashboardStyles";
import { Box, Button, Typography } from "@mui/material";

const UserDashboardPage = () => {
  return (
    <Layout>
      <Box sx={mainBox}>
        <Box>
          <Typography variant="h3" align="center">
            Ainda não tem uma conta? Cadastre-se para poder registar suas
            actividades. Ou Faça login
            <Button
              href={"/auth/login"}
              LinkComponent={Link}
              noLinkStyle
              align="center"
              sx={{
                fontSize: 32,
              }}
            >
              Aqui
            </Button>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default UserDashboardPage;
