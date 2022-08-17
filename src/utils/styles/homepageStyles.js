import { grey } from '@mui/material/colors';
import bgImage from 'public/images/bg.jpg';

import secondBgImage from 'public/images/the-devils-bridge.jpg';

export const firstSection = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 500,
  backgroundImage: `url(${bgImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export const secondSection = {
  px: 10,
  minHeight: 500,
  bgcolor: grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // backgroundImage: `url(${secondBgImage.src})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
};
