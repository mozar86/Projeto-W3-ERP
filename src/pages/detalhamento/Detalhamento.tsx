import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ContentArea } from "../dashboard/Dashboard-Styles";
import ClientList from "../../components/detalhamento/ClientList";
import DashboardBar from "../../components/detalhamento/DashboardBar";
import { DetailingContainer } from "./Detalhamento-Styles";

const Detalhamento: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <DetailingContainer>
            <Sidebar isOpen={isSidebarOpen} />
            <ContentArea>
                <Header
                    onToggleSidebar={handleToggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
                <DashboardBar />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <ClientList filter="alta" />
                    <ClientList filter="baixa" />
                </div>
            </ContentArea>
        </DetailingContainer>
    );
};

export default Detalhamento;
