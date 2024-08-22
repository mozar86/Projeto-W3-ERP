import React from "react";
import { DataCardContainer } from "./DashboardBar-Styles";
import { DataCardTitle, DataCardValue } from "./DataCard-Styles";

interface DataCardProps {
  title: string;
  value: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, value }) => {
  return (
    <DataCardContainer>
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardValue>{value}</DataCardValue>
    </DataCardContainer>
  );
};

export default DataCard;
