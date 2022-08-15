import { Card, Typography } from '@mui/material';

const MessageCard = ({ title, body, status }) => {
  return (
    <Card
      sx={{
        width: '80%',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Typography variant='h5'>Título: {title}</Typography>
      <Typography>Corpo: {body}</Typography>
      <Typography>Estado: {status}</Typography>
    </Card>
  );
};
export default MessageCard;
