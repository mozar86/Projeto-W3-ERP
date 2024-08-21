import React from "react";
import { DashboardBarContainer, Title, FilterMenu, DataCardContainer, DashboardBarTop } from "./DashboardBar-Styles";
import DataCard from "./DataCard";


const DashboardBar = () => {
  return (
    <DashboardBarContainer>
      <DashboardBarTop>
        <Title>Dashboard</Title>
        <FilterMenu>
          <option>Janeiro</option>
          <option>Fevereiro</option>
          <option>Março</option>
          {/* Outros meses */}
        </FilterMenu>
      </DashboardBarTop>
      <DataCardContainer>
        <DataCard title="Produtos" value="120" />
        <DataCard title="Clientes" value="56" />
        <DataCard title="Vendas" value="501" />
        <DataCard title="Lucros" value="103" />
      </DataCardContainer>
    </DashboardBarContainer>
  );
};

export default DashboardBar;
