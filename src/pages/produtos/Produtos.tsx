import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ProdutosContainer, ContentArea } from "./Produtos-Styles";



const Predicoes: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <ProdutosContainer>
                <Sidebar isOpen={isSidebarOpen} />
                <ContentArea>
                    <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                    {isSidebarOpen && (
                        <>

                        </>
                    )}
                </ContentArea>
            </ProdutosContainer>
        </>
    )
}

export default Predicoes;