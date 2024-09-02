import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    CardContainer,
    CardHeader,
    ClientInfo,
    CardGrid,
    ProductList,
    ProductItem,
    ProductIcon,
    TitleContainer,
    IconElipse,
    StyledLink,
    SetaImage,
} from "./ClientCard-Styles";

interface Product {
    name: string;
    nextPurchase: string;
}

interface Client {
    id: number;
    name: string;
    status: string;
}

const mockProducts: Product[] = [
    { name: "Álcool em gel", nextPurchase: "02/09/22" },
    { name: "Água sanitária", nextPurchase: "05/09/22" },
    { name: "Papel higiênico", nextPurchase: "10/09/22" },
];

const ClientCard: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("http://localhost:3000/customers");
                setClients(response.data.slice(0, 12));
            } catch (error) {
                console.error("Erro ao buscar os clientes:", error);
            }
        };

        fetchClients();
    }, []);

    return (
        <CardGrid>
            {clients.map((client) => (
                <StyledLink to={`/predicao`} key={client.id}>
                    <CardContainer>
                        <CardHeader>
                            <ClientInfo>
                                <ProductIcon
                                    src="../../src/assets/people-image.png"
                                    alt="produtos"
                                />
                                <div className="client-name-status">
                                    <h2>{client.name}</h2>
                                    <TitleContainer>
                                        <IconElipse src="../src/assets/icon-elipse.png" alt="icon-elipse" />
                                        <h3>Status vai aqui</h3>
                                    </TitleContainer>
                                    <span className="status">{client.status}</span>
                                </div>
                            </ClientInfo>
                            <SetaImage src="../src/assets/seta-direita.png" alt="seta direita" />
                        </CardHeader>
                        <ProductList>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Próx. compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockProducts.map((product, index) => (
                                    <ProductItem key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.nextPurchase}</td>
                                    </ProductItem>
                                ))}
                            </tbody>
                        </ProductList>
                    </CardContainer>
                </StyledLink>
            ))}
        </CardGrid>
    );
};

export default ClientCard;
