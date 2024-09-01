import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
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

  const navigate = useNavigate();  

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/customers"); 
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

  const handleClientClick = (id: number) => {
    navigate(`/detalhamento/${id}`);  // Navega para a página de detalhes do cliente
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
          <ListRow key={client.id} onClick={() => handleClientClick(client.id)}>
            <ListCell>{client.id.toString().padStart(3, "0")}</ListCell>
            <ListCell>{client.name}</ListCell>
            <ListCell>{`${(client.percentage * 100).toFixed(2)}%`}</ListCell>
            <img src="../src/assets/seta-direita.png" alt="seta" />
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default ClientList;
