import React from "react";
import { 
  ListContainer, 
  ListTitle, 
  ListButton, 
  ListTable, 
  ListRow, 
  ListCell 
} from "./ClientList-Styles";

const ProductList = () => {
  return (
    <ListContainer>
      <ListTitle>Produtos</ListTitle>
      <ListButton>Adicionar Produto</ListButton>
      <ListTable>
        <ListRow>
          <ListCell>ID</ListCell>
          <ListCell>Produto</ListCell>
          <ListCell>Percentual</ListCell>
        </ListRow>
        {/* Mock de dados */}
        <ListRow>
          <ListCell>1</ListCell>
          <ListCell>Produto A</ListCell>
          <ListCell>25%</ListCell>
        </ListRow>
      </ListTable>
    </ListContainer>
  );
};

export default ProductList;
