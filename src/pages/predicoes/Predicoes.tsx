import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ContentArea, PageTitle, SearchBar, CardGrid } from "./Predicoes-Styles";
import ClientCard from "../../components/predicoes/ClientCard";

const Predicoes: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <ContentArea isSidebarOpen={isSidebarOpen}>
            <Sidebar isOpen={isSidebarOpen} />
            <div>
                <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                <PageTitle>Predições</PageTitle>
                <SearchBar placeholder="Pesquise uma palavra-chave" />
                <CardGrid>
                    {/* Exemplo de cards. Substitua os dados mockados conforme necessário */}
                    <ClientCard 
                        clientName="Hotel Ibis" 
                        status="Status vai aqui" 
                        products={[
                            { name: "Álcool em gel", nextPurchase: "02/09/22" },
                            { name: "Água sanitária", nextPurchase: "05/09/22" },
                            { name: "Papel higiênico", nextPurchase: "10/09/22" },
                        ]}
                    />
                    <ClientCard 
                        clientName="Academia Smart Fit" 
                        status="Status vai aqui" 
                        products={[
                            { name: "Álcool em gel", nextPurchase: "02/09/22" },
                            { name: "Água sanitária", nextPurchase: "05/09/22" },
                            { name: "Papel higiênico", nextPurchase: "10/09/22" },
                        ]}
                    />
                    {/* Adicione mais <ClientCard /> conforme necessário */}
                </CardGrid>
            </div>
        </ContentArea>
    );
};

export default Predicoes;
