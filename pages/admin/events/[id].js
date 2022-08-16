import ADMLayout from "@/components/admin/ADMLayout";
import { API_URL } from "@/config";
import { PlusOneTwoTone } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { parseCookies } from "helpers";
import Image from "next/image";

export default function EventDetailPage({ result }) {



  return <ADMLayout>
    {result.data &&
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <Typography variant="h3"> {result.data.attributes.title} </Typography>
          <Image width={500} height={400} alt='' src={result.data.attributes.image.data.attributes.url} />
        </Box>
        <Box sx={{ flex: 2, pt: 6, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
          <Typography variant="body2" align="justify"> {result.data.attributes.description} </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button sx={{
              bgcolor: green[900],
              color: grey[100],
              ":hover": {
                bgcolor: green[800],
                color: grey[200]
              }
            }}> <PlusOneTwoTone /> Interessado</Button>
            <Typography variant="h5" >Interesses</Typography>
            <Typography variant="h5" >Interesses</Typography>

          </Box>
        </Box>
      </Container>
    }
  </ADMLayout>;
};

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/events/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const result = await res.json()
  if (res.ok) {
    console.log(result.data.attributes.image.data);
  } else {
    console.log(result.error.status)
  }
  return {
    props: {
      result,
    },
  }
}