import React from "react";
import Layout from "../../Layout/Layout";
import { Container } from "@chakra-ui/react";
import TitleSection from "./components/TitleSection";
import Float from "./components/Float";
import Reports from "./components/Reports";
import NewArrivalTable from "./components/NewArrivalTable";
import TopSection from "./components/TopSection";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Float />
        <TitleSection />
        <Container maxW="container.xl" pb="100px">
          <TopSection />
          <Reports />
          <NewArrivalTable />
        </Container>
      </Layout>
    </div>
  );
};

export default Dashboard;
