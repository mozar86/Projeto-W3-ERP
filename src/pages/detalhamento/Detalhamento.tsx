import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ContentArea } from "../dashboard/Dashboard-Styles";
import { DetalhamentoContainer } from "./Detalhamento-Styles";
import ClientList from "../../components/detalhamento/ClientList";
import DashboardBar from "../../components/detalhamento/DashboardBar";


const Detalhamento: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <DetalhamentoContainer>
                <Sidebar isOpen={isSidebarOpen} />
                <ContentArea>
                    <Header
                        onToggleSidebar={handleToggleSidebar}
                        isSidebarOpen={isSidebarOpen}
                    />
                    {isSidebarOpen && (
                        <>
                            <DashboardBar />
                            <div style={{ display: "flex" }}>
                                <ClientList />
                                <ClientList />
                            </div>
                        </>
                    )}
                </ContentArea>
            </DetalhamentoContainer>
        </>
    )
}

export default Detalhamento;