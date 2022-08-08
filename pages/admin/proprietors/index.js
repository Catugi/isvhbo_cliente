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
export default function OwnersPage({ proprietors }) {
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
            href='/admin/proprietors/new'
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
              {proprietors.data.map((employee) => (
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/proprietors?_sort=date:ASC&_limit=3`);
  const proprietors = await res.json();
  console.log(proprietors.data);

  return {
    props: { proprietors },
    revalidate: 1,
  };
}
