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
export default function OwnersPage({ result }) {
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
              {result.data && result.data.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.attributes.fname}</TableCell>
                  <TableCell>{employee.attributes.sname} </TableCell>
                  <TableCell>{employee.attributes.lname} </TableCell>
                  <TableCell>{employee.attributes.address}</TableCell>
                  <TableCell>{employee.attributes.bday}</TableCell>
                  <TableCell>{employee.attributes.phone}</TableCell>

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
                      }}
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
    props: { result },
  };
}
