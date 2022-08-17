import Layout from "@/components/Layout"
import { Box, Button, Card, Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import AuthContext from "context/AuthContext"
import Image from "next/image"
import { useContext } from "react"
import avatar from 'public/images/bg.jpg';
import Link from "@/components/Link"
import { API_URL } from "@/config"
import { parseCookies } from "helpers"

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 700 }}>
        <Typography variant="h4" textAlign={'center'}>Informações sobre a sua conta</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Card sx={{ width: 400, height: 400, bgcolor: grey[500], borderRadius: 100 }}>
            <Image width={400} height={400} src={avatar.src} alt='sem imagem' />
          </Card>
          <Card sx={{ width: 500, height: 500, bgcolor: grey[200], p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }} elevation={10}>
            {!user && <Typography variant="h2" align="center">Você não tem uma conta</Typography>}
            {user && (
              <Grid container>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">Nome de usuário:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.username} </Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">Email:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.email} </Typography>
                </Grid>

                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">Cadastrado em</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.createdAt} </Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">Actualizou em:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.updatedAt} </Typography>

                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">É funcionário:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.isAdmin ? 'Sim' : 'Não'} </Typography>
                </Grid>

                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">É Administrador:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.isAdmin ? 'Sim' : 'Não'} </Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">É Empresário:</Typography>
                </Grid>
                <Grid item sx={12} sm={6}>
                  <Typography variant="h5">{user.proprietor ? 'Sim' : 'Não'} </Typography>

                </Grid>

              </Grid>)}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button LinkComponent={Link} href='/'>Voltar ao ínicio</Button>
              <Button variant="contained" sx={{
                bgcolor: grey[900], color: grey[100],
                ":hover": { bgcolor: grey[800], color: grey[200] }
              }} onClick={(e) => (alert('Atenção: Esta funcionalidade ainda não está implementada'))}>Imprimir Informações </Button>
            </Box>
          </Card>
          <Card sx={{ flex: 1 / 2, height: 500, px: 1 }}>
            <Typography variant="h5"> Main Informações</Typography>
          </Card>
        </Box>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { token } = parseCookies();
  const res = await fetch(`${API_URL}/users?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const result = await res.json();
  // console.log(result.data);

  return {
    props: { result },
    // revalidate: 1,
  };
}