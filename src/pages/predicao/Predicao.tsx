import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ContentArea } from "../dashboard/Dashboard-Styles";
import { PredicoesContainer } from "./Predicao-Styles";

const Predicoes: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <PredicoesContainer>
                <Sidebar isOpen={isSidebarOpen} />
                <ContentArea>
                    <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                    {isSidebarOpen && (
                        <>

                        </>
                    )}
                </ContentArea>
            </PredicoesContainer>
        </>
    )
}

export default Predicoes;