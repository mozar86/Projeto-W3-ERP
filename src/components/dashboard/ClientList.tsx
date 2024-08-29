import React, { useEffect, useState } from "react";
import { 
  ListContainer, 
  ListHeader, 
  ListTitle, 
  StatusButton, 
  ListTable, 
  ListRow, 
  ListCell,
} from "./ClientList-Styles";
import axios from "axios";

interface Client {
  id: number;
  name: string;
  percentage: number;
}

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    axios
    .get("https://example.com/api/clients")
    .then((response) => {
      setClients(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar clientes:", error);
    });
  }, []);

  return (
<ListContainer>
      <ListTitle>Clientes</ListTitle>
      <ListTable>
        <ListRow>
          <ListCell>ID</ListCell>
          <ListCell>Cliente</ListCell>
          <ListCell>Percentual</ListCell>
        </ListRow>
        {clients.map((client) => (
          <ListRow key={client.id}>
            <ListCell>{client.id.toString().padStart(3, '0')}</ListCell>
            <ListCell>{client.name}</ListCell>
            <ListCell>{`${client.percentage * 100}%`}</ListCell>
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default ClientList;




