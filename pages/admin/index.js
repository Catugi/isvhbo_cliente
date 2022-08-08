import Dashboard from "@/components/admin/Dashboard";
import ADMLayout from "@/components/admin/ADMLayout";
import { Box, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { height } from "@mui/system";
import React from "react";

const index = () => {
  return (
    <ADMLayout>
      <Dashboard />
    </ADMLayout>
  );
};

export default index;
