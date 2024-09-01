import React from "react";
import { DashboardBarContainer, Title, DataCardContainer, DashboardBarTop } from "./DashboardBar-Styles";
import DataCard from "./DataCard";


const DashboardBar: React.FC = () => {

  const dataCards = [
    { title: "Total", title2: "Produtos em alta", content: "120", content2: "+13%" },
    { title: "Total", title2: "Produtos em baixa", content: "56", content2: "-29%" },
    { title: "Total", title2: "Clientes em alta", content: "501", content2: "+25%" },
    { title: "Total", title2: "Clientes em baixa", content: "103", content2: "-15%" },
    { title: "Total", title2: "Clientes em baixa", content: "103", content2: "-15%" }
  ];

  return (
    <DashboardBarContainer>
      <DashboardBarTop>
        <Title>Papel Higiênico</Title>
      </DashboardBarTop>
      <DataCardContainer>
        {dataCards.map((data, index) => (
          <DataCard
            key={index}
            title={data.title}
            title2={data.title2}
            content={data.content}
            content2={data.content2}
          />
        ))}
      </DataCardContainer>
    </DashboardBarContainer>
  );
};

export default DashboardBar;
