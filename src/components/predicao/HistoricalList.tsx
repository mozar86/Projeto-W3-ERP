import React from "react";
import {
  ListContainer,
  SectionTitle,
  ListTitle,
  ListTable,
  ListRow,
  ListCell,
  ListRowTitles,
  ListCellTitles,
} from "./List-Styles";

const historicalData = [
  { id: 1, name: "Produto A", percentage: 12 },
  { id: 2, name: "Produto B", percentage: -8 },
  { id: 3, name: "Produto C", percentage: 3 },
];

const HistoricalList = () => {
  return (
    <ListContainer>
      <SectionTitle>
        <ListTitle>Histórico</ListTitle>
      </SectionTitle>
      <ListTable>
        <ListRowTitles>
          <ListCellTitles>ID</ListCellTitles>
          <ListCellTitles>Produto</ListCellTitles>
          <ListCellTitles>Percentual</ListCellTitles>
        </ListRowTitles>
        {historicalData.map((data) => (
          <ListRow key={data.id}>
            <ListCell>{data.id}</ListCell>
            <ListCell>{data.name}</ListCell>
            <ListCell>{`${data.percentage}%`}</ListCell>
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default HistoricalList;
