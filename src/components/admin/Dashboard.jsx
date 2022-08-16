import { useState } from 'react';
import {
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  Toolbar,
  Grid,
  Container,
  Paper,
  Typography,
} from '@mui/material';

import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { grey } from '@mui/material/colors';
import Title from './Title';

const mdTheme = createTheme();

/* ======================================================================== */
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

/* ========================================================================= */

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            alignContent: 'center',
          }}
        >
          <Title
            variant='h4'
            sx={{
              color: grey[900],
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Actividades recentes da instituição
          </Title>
          {/* <Toolbar /> */}
          <Container maxWidth='lg' sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart data={data} />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/*  <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
