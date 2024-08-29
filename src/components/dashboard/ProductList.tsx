import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ListContainer,
  ListTitle,
  ListTable,
  ListRow,
  ListCell,
} from "./ProductList-Styles";

interface Product {
  id: number;
  name: string;
  percentage: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <ListContainer>
      <ListTitle>Produtos</ListTitle>
      <ListTable>
        <ListRow>
          <ListCell>ID</ListCell>
          <ListCell>Produto</ListCell>
          <ListCell>Percentual</ListCell>
        </ListRow>
        {products.map((product) => (
          <ListRow key={product.id}>
            <ListCell>{product.id.toString().padStart(3, '0')}</ListCell>
            <ListCell>{product.name}</ListCell>
            <ListCell>{`${product.percentage * 100}%`}</ListCell>
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default ProductList;
