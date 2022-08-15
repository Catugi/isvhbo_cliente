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
import { red, grey, cyan } from '@mui/material/colors';
import { parseCookies } from 'helpers/index';
export default function EmployeesPage({ result }) {
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
          <Title>Funcionários da Instituição</Title>
          <Button
            variant='contained'
            LinkComponent={Link}
            noLinkStyle
            href='/admin/employees/add'
          >
            Adicionar Novo funcionário
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {result.data && result.data.length === 0 && (
            <Typography variant='h4' align='center'>
              Não há funcionários cadastrados ainda
            </Typography>
          )}



          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Primeiro Nome</TableCell>
                <TableCell>Último Nome</TableCell>
                <TableCell>Morada</TableCell>
                <TableCell>Nasceu em</TableCell>
                <TableCell>Entrou em</TableCell>

                <TableCell>Telemóvel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.data && result.data.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.attributes.fname}</TableCell>
                  <TableCell>{employee.attributes.lname} </TableCell>
                  <TableCell>{employee.attributes.address}</TableCell>
                  <TableCell>{employee.attributes.bday}</TableCell>

                  <TableCell>{employee.attributes.joinedAt}</TableCell>
                  <TableCell>{employee.attributes.telephone}</TableCell>

                  <TableCell>
                    <Button LinkComponent={Link} href='#' variant='contained' sx={{
                      bgcolor: cyan[800],
                      color: grey[100],
                      ':hover': {
                        bgcolor: cyan[900],
                        color: grey[200],
                      }
                    }}>
                      Detalhes
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      sx={{
                        bgcolor: red[800],
                        color: grey[100],
                        ':hover': {
                          bgcolor: red[900],
                          color: grey[200],
                        }
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
  // console.log(token)
  const res = await fetch(`${API_URL}/employees`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  const result = await res.json();
  if (res.ok) {
    // console.log(result.data);

  } else {
    // console.log(result.error.status)
  }

  return {
    props: { result },
    // revalidate: 1,
  };
}
