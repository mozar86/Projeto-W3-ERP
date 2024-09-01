import React from "react";
import { CardContainer, CardHeader, CardStatus, ProductList, ProductItem } from "./ClientCard-Styles.ts";

interface Product {
    name: string;
    nextPurchase: string;
}

interface ClientCardProps {
    clientName: string;
    status: string;
    products: Product[];
}

const ClientCard: React.FC<ClientCardProps> = ({ clientName, status, products }) => {
    return (
        <CardContainer>
            <CardHeader>
                <div>
                    <h2>{clientName}</h2>
                    <CardStatus>{status}</CardStatus>
                </div>
                <div>→</div>
            </CardHeader>
            <ProductList>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Próx. compra</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <ProductItem key={index}>
                            <td>{product.name}</td>
                            <td>{product.nextPurchase}</td>
                        </ProductItem>
                    ))}
                </tbody>
            </ProductList>
        </CardContainer>
    );
};

export default ClientCard;
