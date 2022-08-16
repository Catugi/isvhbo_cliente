import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import {
  DesignServicesRounded,
  DisplaySettingsOutlined,
  EventAvailableOutlined,
  NewspaperRounded,
  Notifications,
  OtherHousesOutlined,
  Report,
} from '@mui/icons-material';
import Link from '../Link';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} noLinkStyle href='/admin'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Painel' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/employees'>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary='Funcionários' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/proprietors'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary='Proprietários' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/reports'>
      <ListItemIcon>
        <Report />
      </ListItemIcon>
      <ListItemText primary='Relatórios' />
    </ListItemButton>
    <ListItemButton component={Link} noLinkStyle href='#'>
      <ListItemIcon>
        <Notifications />
      </ListItemIcon>
      <ListItemText primary='Notificações' />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton component={Link} noLinkStyle href='/admin/services'>
      <ListItemIcon>
        <DesignServicesRounded />
      </ListItemIcon>
      <ListItemText primary='Serviços' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/diseases'>
      <ListItemIcon>
        <DisplaySettingsOutlined />
      </ListItemIcon>
      <ListItemText primary='Doenças' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/proprieties'>
      <ListItemIcon>
        <OtherHousesOutlined />
      </ListItemIcon>
      <ListItemText primary='Propriedades' />
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    <ListItemButton component={Link} noLinkStyle href='/admin/news'>
      <ListItemIcon>
        <NewspaperRounded />
      </ListItemIcon>
      <ListItemText primary='Notícias' />
    </ListItemButton>

    <ListItemButton component={Link} noLinkStyle href='/admin/events'>
      <ListItemIcon>
        <EventAvailableOutlined />
      </ListItemIcon>
      <ListItemText primary='Eventos' />
    </ListItemButton>
  </React.Fragment>
);
