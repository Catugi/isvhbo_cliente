import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Link from "../Link";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Ganhos recentes</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Em 29 de Junho, 2022
      </Typography>
      <div>
        <Link color="primary" href="/admin/finances" onClick={preventDefault}>
          Ver balanço total
        </Link>
      </div>
    </React.Fragment>
  );
}
