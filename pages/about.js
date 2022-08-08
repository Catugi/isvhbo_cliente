import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/Layout";
import { mainBox } from "@/utils/styles/generalStyles";
import { Container } from "@mui/material";

export default function About() {
  return (
    <Layout>
      <Container sx={mainBox}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat
        voluptates repellendus rem sint enim dolor nulla, vel sit omnis
        architecto mollitia vero dolorem in, velit eos reprehenderit accusamus.
        Tempore.
      </Container>
    </Layout>
  );
}
