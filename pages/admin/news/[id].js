import ADMLayout from "@/components/admin/ADMLayout";

export default function NewDetailPage() {
  return <ADMLayout></ADMLayout>;
};

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/news?id=${id}`)
  const result = await res.json()
  /* if (res.ok) {
    console.log(result.data);
  } else {
    console.log(result.error.status)
  } */

  return {
    props: {
      evt: result.data[0],
    },
  }
}