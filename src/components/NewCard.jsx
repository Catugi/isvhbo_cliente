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

const NewCard = ({ title, publisher, description, link, date }) => {
  return (
    <Card sx={style}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      <Typography variant="body1" align="center">
        {description}
      </Typography>
      <Button LinkComponent={Link} href={link}>
        Ver mais aqui
      </Button>
      <Typography variant="body2" align="center" position={"sticky"}>
        Publicado por {publisher} e {date}
      </Typography>
    </Card>
  );
};

export default NewCard;
