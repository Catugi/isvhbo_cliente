import ADMLayout from '@/components/admin/ADMLayout';
import Title from '@/components/admin/Title';
import Link from '@/components/Link';
import { API_URL } from '@/config';
import {
  Box,
  Button,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { red, grey } from '@mui/material/colors';
import { parseCookies } from 'helpers';
import { useRouter } from 'next/router';
export default function OwnersPage({ result, token }) {
  const router = useRouter();
  console.log(token)
  const handleDelete = async (id) => {
    if (confirm('Você tem certeza?')) {
      const res = await fetch(`${API_URL}/proprietors/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(token)
      const data = await res.json()

      if (!res.ok) {
        alert(data.error.message)
      } else {
        router.reload()
      }
    }
  }


  return (
    <ADMLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
          }}
        >
          <Title>Empresários Cadastrados</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            noLinkStyle
            href='/admin/proprietors/add'
          >
            Adicionar Novo Empresário
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Primeiro Nome</TableCell>
                <TableCell>Apelido</TableCell>

                <TableCell>Último Nome</TableCell>
                <TableCell>Morada</TableCell>
                <TableCell>Nasceu em</TableCell>
                <TableCell>Telemóvel</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {result.data && result.data.map((proprietor) => (
                <TableRow key={proprietor.id}>
                  <TableCell>{proprietor.attributes.fname}</TableCell>
                  <TableCell>{proprietor.attributes.sname} </TableCell>
                  <TableCell>{proprietor.attributes.lname} </TableCell>
                  <TableCell>{proprietor.attributes.address}</TableCell>
                  <TableCell>{proprietor.attributes.bday}</TableCell>
                  <TableCell>{proprietor.attributes.phone}</TableCell>

                  <TableCell>
                    <Button LinkComponent={Link} href='#' variant='contained'>
                      Detalhes
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      sx={{
                        bgcolor: red[900],
                        color: grey[900],
                      }} onClick={() => handleDelete(proprietor.id)}
                    >
                      Apagar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </ADMLayout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  console.log(token)
  const res = await fetch(`${API_URL}/proprietors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const result = await res.json();
  /* if (res.ok) {
    console.log(result.data);
  } else {
    console.log(result.error.status)
  } */
  return {
    props: { result, token },
  };
}
