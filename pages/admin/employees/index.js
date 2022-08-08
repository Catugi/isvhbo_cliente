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
export default function EmployeesPage({ employees }) {
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
            href='/admin/employees/new'
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
          {employees.data.length === 0 && (
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
              {employees.data.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.attributes.fname}</TableCell>
                  <TableCell>{employee.attributes.lname} </TableCell>
                  <TableCell>{employee.attributes.address}</TableCell>
                  <TableCell>{employee.attributes.bday}</TableCell>

                  <TableCell>{employee.attributes.joinedAt}</TableCell>
                  <TableCell>{employee.attributes.telephone}</TableCell>

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
  const res = await fetch(`${API_URL}/employees?_sort=date:ASC&_limit=3`);
  const employees = await res.json();
  console.log(employees.data);

  return {
    props: { employees },
    revalidate: 1,
  };
}
