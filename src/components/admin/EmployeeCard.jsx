import { Card } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const EmployeeCard = () => {
  return (
    <Card
      sx={{
        heigth: 100,
        width: 250,
        bgcolor: grey[900],
      }}
    ></Card>
  );
};

export default EmployeeCard;
