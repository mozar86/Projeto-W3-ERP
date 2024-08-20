import React from "react";
import { DataCardContainer } from "./DashboardBar-Styles";
import { DataCardTitle, DataCardValue } from "./DataCard-Styles";


const DataCard = ({ title, value }) => {
  return (
    <DataCardContainer>
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardValue>{value}</DataCardValue>
    </DataCardContainer>
  );
};

export default DataCard;
