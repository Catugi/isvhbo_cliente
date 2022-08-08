import EventInfo from "@/components/EventInfo";
import Layout from "@/components/Layout";
import { Box } from "@mui/material";

const EventDetailsPage = () => {
  return (
    <Layout>
      <Box>
        <EventInfo></EventInfo>
      </Box>
    </Layout>
  );
};

export default EventDetailsPage;
