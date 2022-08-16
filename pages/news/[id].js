import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Box } from "@mui/material";
import { parseCookies } from "helpers";

export default function AddsDetailsPage({ data }) {
  return <Layout>
    <Box sx={{ m: 5 }}>

      {data.attributes.title}
    </Box>
  </Layout>;
};

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/news/?id=${id}`)
  const result = await res.json()
  if (res.ok) {
    console.log(result.data);
  } else {
    console.log(result.error.status)
  }

  return {
    props: {
      data: result.data[0],
    },
  }
}