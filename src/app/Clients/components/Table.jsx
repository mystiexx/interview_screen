import React from "react";
import styles from "../styles.module.css";
import { Flex, Text, Box, Button, Image } from "@chakra-ui/react";
import Badge from "../../../components/Badge";
import { Link } from "react-router-dom";

const head = [
  "Client",
  "loan officer",
  "wallet balance",
  "date created",
  "status",
  "",
];

const Table = ({ clients }) => {
  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table_head}>
            {head.map((data, id) => (
              <th key={id}>{data}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className={styles.table_body}>
              <td>
                <Flex>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Image borderRadius="6px" src={client.image} alt="people" />
                  </Box>
                  <Box ml="15px">
                    <Text fontSize="14px" fontWeight="700">
                      {client.name}
                    </Text>
                    <Text color="#B5B5C3" fontSize="13px" fontWeight="500">
                      {client.email}
                    </Text>
                  </Box>
                </Flex>
              </td>
              <td>{client.loan_officer}</td>
              <td>
                {client.currency}
                {client.price}
              </td>
              <td style={{ color: "#888C9F" }}>{client.created_at}</td>
              <td>
                {client.status === "in progress" ? (
                  <Badge color="#BD00FF" bgColor="#F8DEFF">
                    {client.status}
                  </Badge>
                ) : client.status === "approved" ? (
                  <Badge bgColor="#C9F7D6" color="#1BC5BD">
                    {client.status}
                  </Badge>
                ) : (
                  <Badge bgColor="#FED6DA" color="#F64E60">
                    {client.status}
                  </Badge>
                )}
              </td>
              <td>
                <Link to={`/clients/${client.id}`}>
                  <Button
                    color="#F18651"
                    bg="#FFF0E8"
                    fontSize="12px"
                    fontWeight="600"
                    _hover={{
                      background: "#FFF0E8",
                    }}
                  >
                    View Client
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
