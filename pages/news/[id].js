import Layout from "@/components/Layout";
import Link from "@/components/Link";
import { API_URL } from "@/config";
import { Box, Button, Typography } from "@mui/material";
import { parseCookies } from "helpers";
import Image from "next/image";
import cover from 'public/images/Background.jpg';

export default function AddsDetailsPage({ result }) {
  return <Layout>
    <Box sx={{ m: 5, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column' }}>

        <Typography variant="h4" >{result.data.attributes.title}</Typography>
        <Image width={200} height={400} src={cover.src} alt='Sem Imagem' />
        <Typography variant="body2">{result.data.attributes.body}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Veja mais em </Typography>
          <Link href={result.data.attributes.usefulLinks}>Aqui</Link>
        </Box>
      </Box>
      <Box sx={{ px: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" align="center">Mais informações</Typography>
        <Button LinkComponent={Link} href='/news' noLinkStyle>Ver todas as notícias</Button>
        <Button LinkComponent={Link} href='/news' noLinkStyle>Ver todos os eventos</Button>
      </Box>
    </Box>
  </Layout>;
};

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/news/${id}?populate=*`/* , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  } */)
  const result = await res.json()
  /* if (res.ok) {
    console.log(result.data.attributes.image.data);
  } else {
    console.log(result.error.status)
  } */
  return {
    props: {
      result,
    },
  }
}