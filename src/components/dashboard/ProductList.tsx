import React from "react";
import { 
  ListContainer, 
  ListHeader, 
  ListTitle,  
  StatusButton, 
  ListTable, 
  ListRow, 
  ListCell 
} from "./ProductList-Styles";

const ProductList = () => {
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>
          <img src="../src/assets/product-icon.png" alt="Ícone de Produto" />
          Produtos
        </ListTitle>
        <div>
          <StatusButton isActive={true}>Em alta</StatusButton>
          <StatusButton isActive={false}>Em baixa</StatusButton>
        </div>
      </ListHeader>
      <ListTable>
        <ListRow>
          <ListCell>ID</ListCell>
          <ListCell>Produto</ListCell>
          <ListCell>Percentual</ListCell>
        </ListRow>
        {/* Mock de dados */}
        <ListRow>
          <ListCell>001</ListCell>
          <ListCell>Papel higiênico</ListCell>
          <ListCell>+72%</ListCell>
        </ListRow>
        {/* Adicione mais linhas de dados aqui */}
      </ListTable>
    </ListContainer>
  );
};

export default ProductList;
