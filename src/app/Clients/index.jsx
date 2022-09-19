import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Container, Box } from "@chakra-ui/react";
import TitleCard from "./components/TitleCard";
import Filters from "./components/Filters";
import Table from "./components/Table";
import { clientData } from "./data";
import Pagination from "../../components/Pagination";
import moment from "moment";
import CreateClient from "./CreateClient/CreateClient";

const filter = ["in progress", "rejected", "approved"];

const { Parser } = require("json2csv");
var fileDownload = require("js-file-download");
const fields = ["Name", "Email", "Loan_Officer", "Price", "Status"];
const json2csvParser = new Parser({ fields });

const Clients = () => {
  const [clients, setClients] = useState(clientData);
  const [open, setOpen ] = useState(false)
  

  const onDownload = () => {
    let tempProducts = [];

    clientData.forEach((product) => {
      let obj = {
        Name: product.name,
        Email: product.email,
        Loan_Officer: product.loan_officer,
        Price: product.currency + product.price,
        Status: product.status,
      };
      tempProducts.push(obj);
    });

    const csv = json2csvParser.parse(tempProducts);
    fileDownload(csv, "Clients.csv");
  };

  const onSearchName = (e) => {
    const searchString = e.target.value.toLowerCase();
    if (!searchString) {
      setClients(clientData);
    } else {
      const result = clientData.filter((data) =>
        data.name.toLowerCase().includes(searchString)
      );
      setClients(result);
    }
  };

  const onSearchEmail = (e) => {
    const searchString = e.target.value.toLowerCase();
    if (!searchString) {
      setClients(clientData);
    } else {
      const result = clientData.filter((data) =>
        data.email.toLowerCase().includes(searchString)
      );
      setClients(result);
    }
  };

  const onFilter = (e) => {
    const searchString = e.target.value.toLowerCase();
    if (!searchString) {
      setClients(clientData);
    } else {
      const result = clientData.filter((data) =>
        data.status.toLowerCase().includes(searchString)
      );
      setClients(result);
    }
  };

  const onDate = (e) => {
    const searchString = moment(e.target.value.toLowerCase()).format("LL");
    if (!searchString) {
      setClients(clientData);
    } else {
      const result = clientData.filter((data) =>
        data.created_at.toLowerCase().includes(searchString)
      );
      setClients(result);
    }
  };
  return (
    <div>
      <Layout>
        <CreateClient isOpen={open} onClose={() => setOpen(!open)}/>
        <Container maxW="container.xl" pb="100px">
          <Box pt="24px">
            <TitleCard onDownload={onDownload} onOpen={()=>setOpen(!open)}/>
            <Filters
              onSearchEmail={onSearchEmail}
              onSearchName={onSearchName}
              onFilter={onFilter}
              filter={filter}
              onDate={onDate}
            />
            <Box
              mt="24px"
              bg="#fff"
              borderRadius="12px"
              pt="33px"
              pl="30px"
              pr="30px"
              pb="136px"
            >
              <Table clients={clients} />
              <Pagination />
            </Box>
          </Box>
        </Container>
      </Layout>
    </div>
  );
};

export default Clients;
