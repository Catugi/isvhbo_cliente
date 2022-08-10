import { useState } from 'react';
import Link from './Link';
import { AppBar, Avatar, Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import avatar from 'public/assets/bg.jpg';
import Image from 'next/image';

import {
  centerBox,
  leftBox,
  mainBox,
  rightBox,
} from '@/utils/styles/headerStyles';
import { styled } from '@mui/system';
import { grey, red } from '@mui/material/colors';
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';
/* ========================================================== */

const MyButton = styled(Button)({
  color: grey[900],
  //border: 'darkblue solid 1px',
  borderRadius: 15,
});

/* const MyButton = (props) => (
  <Button
    sx={{
      color: grey[900],
      borderRadius: 4,
    }}
  >
    {props.children}
  </Button>
);
 */
/* ============================================================ */

/* ============================================================= */
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const router = useRouter();
  const path = router.pathname;

  return (
    <AppBar position='sticky' color='primary'>
      <Box component={'nav'} sx={mainBox}>
        <Box sx={leftBox}>
          <MyButton LinkComponent={Link} href='/'>
            Logo
          </MyButton>
        </Box>
        <Box sx={centerBox}>
          <MyButton LinkComponent={Link} href='/'>
            Início
          </MyButton>
          <MyButton LinkComponent={Link} href='/news'>
            Notícias
          </MyButton>
          <MyButton LinkComponent={Link} href='/events'>
            Eventos
          </MyButton>
          {user && (
            <MyButton LinkComponent={Link} href='/dashboard'>
              Suas Actividas
            </MyButton>
          )}
          <MyButton LinkComponent={Link} href='#'>
            Outros
          </MyButton>
          <MyButton LinkComponent={Link} href='/deseases'>
            Doenças
          </MyButton>
          {/*  <MyButton LinkComponent={Link} href='/contacts'>
            Contactos
          </MyButton> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            fullWidth
            name='search'
            type='search'
            id='search'
            placeholder='Procurar'
            sx={{
              bgcolor: grey[400],
            }}
          />
        </Box>
        <Box>
          {user && user.isAdmin && (
            <MyButton LinkComponent={Link} href='/admin' noLinkStyle>
              Gerenciar
            </MyButton>
          )}
        </Box>

        <Box sx={rightBox}>
          {user ? (
            <>
              <Link href='/profile' noLinkStyle>
                <Avatar>
                  <Image
                    src={avatar.src}
                    height={50}
                    width={50}
                    alt={'Sem Imagem'}
                  />
                </Avatar>
              </Link>
              <MyButton LinkComponent={Link} href='/' onClick={() => logout()}>
                Sair
              </MyButton>
            </>
          ) : (
            <>
              <MyButton LinkComponent={Link} href='/auth/login'>
                Entrar
              </MyButton>
            </>
          )}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
