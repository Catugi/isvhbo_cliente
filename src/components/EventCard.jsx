import { Button, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "./Link";

const style = {
  width: 370,
  height: 200,
  mx: 0.5,
  my: 1,
  bgcolor: grey[300],
  display: "flex",
  flexDirection: "column",
};

const EventCard = ({
  title,
  publisher,
  description,
  link,
  date,
  initialDate,
  finalDate,
}) => {
  return (
    <Card sx={style}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      <Typography variant="body1" align="center">
        {description}
      </Typography>

      <Typography variant="body2" align="center" position={"sticky"}>
        O Evento decorrerá desde {initialDate} até {finalDate}
      </Typography>
      <Typography variant="body2" align="center" position={"sticky"}>
        Publicado por {publisher} Em {date}
      </Typography>
      <Button LinkComponent={Link} href={link}>
        Ver mais aqui
      </Button>
    </Card>
  );
};

export default EventCard;
