import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import {
  ListContainer,
  ListTitle,
  ListTable,
  ListRow,
  ListCell,
  ButtonTitle,
  ProductIcon,
  SectionTitle,
  TitleProdutcs,
  ListRowTitles,
  ListCellTitles,
} from "./ProductList-Styles";

interface Product {
  id: number;
  name: string;
  percentage: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<"alta" | "baixa">("alta");

  const navigate = useNavigate();  

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(
          response.data.filter((product: Product) =>
            filter === "alta" ? product.percentage > 0 : product.percentage < 0
          )
        );
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, [filter]);

  const toggleFilter = () => {
    setFilter(filter === "alta" ? "baixa" : "alta");
  };

  const handleProductClick = (id: number) => {
    navigate(`/detalhamento`);  
  };

  return (
    <ListContainer>
      <TitleProdutcs>
        <SectionTitle>
          <ProductIcon
            src="../../src/assets/produtos-icon-blue.png"
            alt="produtos"
          />
          <ListTitle>Produtos</ListTitle>
        </SectionTitle>
        <ButtonTitle filter={filter} onClick={toggleFilter}>
          {filter === "alta" ? "Em alta" : "Em baixa"}
        </ButtonTitle>
      </TitleProdutcs>
      <ListTable>
        <ListRowTitles>
          <ListCellTitles>ID</ListCellTitles>
          <ListCellTitles>Produto</ListCellTitles>
          <ListCellTitles>Percentual</ListCellTitles>
        </ListRowTitles>
        {filteredProducts.map((product) => (
          <ListRow key={product.id} onClick={() => handleProductClick(product.id)}>
            <ListCell>{product.id.toString().padStart(3, "0")}</ListCell>
            <ListCell>{product.name}</ListCell>
            <ListCell>{`${(product.percentage * 100).toFixed(2)}%`}</ListCell>
            <img src="../src/assets/seta-direita.png" alt="seta" />
          </ListRow>
        ))}
      </ListTable>
    </ListContainer>
  );
};

export default ProductList;
