import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@/components/Link";
import { firstSection, secondSection } from "@/utils/styles/homepageStyles";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <Box>
        <Box sx={firstSection}>
          <Box>
            <Typography variant='h1' align='center'>
              Esta é a página principal
            </Typography>
            <Typography variant='body1' align='center'>
              Veja as novidades do mundo da produção animal no Huambo
            </Typography>
          </Box>
        </Box>

        <Box sx={secondSection}>
          <Typography></Typography>
        </Box>
      </Box>
    </Layout>
  );
}
