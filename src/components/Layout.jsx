import Head from "next/head";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const sx = {};

const Layout = ({ title, keywords, description, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
Layout.defaultProps = {
  title: "Instituto de Serviços Veterinários",
  description: "Procure informações sobre a sua actividade aqui",
  keywords: "Animais, Produção, Veterinária, Gado, Bovino, Caprino, Gestão",
};
export default Layout;
