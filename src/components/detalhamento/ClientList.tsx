import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ListContainer,
  SectionTitle,
  ListTitle,
  ButtonTitle,
  ListTable,
  ListRow,
  ListCell,
  ClientIcon,
  TitleClients,
  ImageDiv,
  ListRowTitles,
  ListCellTitles
} from "./ClientList-Styles";

interface Client {
  id: number;
  name: string;
  percentage: number;
}

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [filter, setFilter] = useState<"alta" | "baixa">("alta");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/customers"); // Certifique-se de que a URL da API esteja correta.
        const fetchedClients = response.data;

        setClients(fetchedClients);
        setFilteredClients(
          fetchedClients.filter((client: Client) =>
            filter === "alta" ? client.percentage > 0 : client.percentage < 0
          )
        );
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClients();
  }, [filter]);

  const toggleFilter = () => {
    setFilter(filter === "alta" ? "baixa" : "alta");
  };

  return (
    <ListContainer>
      <TitleClients>
        <SectionTitle>
          <ImageDiv>
            <ClientIcon
              src="../../src/assets/clientes-icon-blue.png"
              alt="clientes"
            />
          </ImageDiv>
          <ListTitle>Clientes</ListTitle>
        </SectionTitle>
        <ButtonTitle filter={filter} onClick={toggleFilter}>
          {filter === "alta" ? "Em alta" : "Em baixa"}
        </ButtonTitle>
      </TitleClients>
      <ListTable>
        <ListRowTitles>
          <ListCellTitles>ID</ListCellTitles>
          <ListCellTitles>Cliente</ListCellTitles>
          <ListCellTitles>Percentual</ListCellTitles>
        </ListRowTitles>
        {filteredClients.map((client) => (
          <ListRow key={client.id}>
            <ListCell>{client.id.toString().padStart(3, "0")}</ListCell>
            <ListCell>{client.name}</ListCell>
            <ListCell>{`${(client.percentage * 100).toFixed(2)}%`}</ListCell>
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default ClientList;
