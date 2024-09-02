import React from "react";
import { useNavigate } from "react-router-dom";
import { ListCell, ListCellTitles, ListRow, ListRowTitles, ListTable } from "./ProductsList-Styles";

const ProductsList: React.FC<{ products: any[] }> = ({ products }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/detalhamento`);
    };

    return (
        <ListTable>
            <ListRowTitles>
                <ListCellTitles>ID</ListCellTitles>
                <ListCellTitles>Produto</ListCellTitles>
                <ListCellTitles>Status</ListCellTitles>
                <ListCellTitles>Percentual</ListCellTitles>
            </ListRowTitles>
            {products.map((product, index) => (
                <ListRow key={index} onClick={handleRowClick}>
                    <ListCell>{product.id}</ListCell>
                    <ListCell>{product.name}</ListCell>
                    <ListCell style={{ color: product.percentual < 0 ? "red" : "green" }}>
                        {product.percentual < 0 ? "Em baixa" : "Em alta"}
                    </ListCell>
                    <ListCell>{`${product.percentual}%`}</ListCell>
                </ListRow>
            ))}
        </ListTable>
    );
};

export default ProductsList;
