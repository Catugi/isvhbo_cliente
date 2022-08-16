import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id,
  date,
  name,
  cameFrom,
  serviceType,
  paymentMethod,
  amount
) {
  return { id, date, name, cameFrom, serviceType, paymentMethod, amount };
}

const rows = [
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
  createData(
    1,
    '20 de, Março, 2020',
    'Jhon Doe',
    'Bié',
    'Aluguer de Quarto',
    'TPA',
    25000.0
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Actividades de usuários e empresas recentemente</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Morada</TableCell>
            <TableCell>Tipo de serviço</TableCell>
            <TableCell>Método de pagamento</TableCell>
            <TableCell align='right'>Valor gerado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell> {row.name} </TableCell>
              <TableCell>{row.cameFrom}</TableCell>
              <TableCell>{row.serviceType}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mais
      </Link>
    </React.Fragment>
  );
}
