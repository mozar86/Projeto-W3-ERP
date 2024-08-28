import React, { useState } from "react";
import { DashboardContainer, ContentArea } from "./Dashboard-Styles";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import DashboardBar from "../../components/dashboard/DashboardBar";
import ProductList from "../../components/dashboard/ProductList";
import ClientList from "../../components/dashboard/ClientList";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <DashboardContainer>
        <Sidebar isOpen={isSidebarOpen} />
        <ContentArea>
          <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
          {isSidebarOpen && (
            <>
              <DashboardBar />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <ProductList />
                <ClientList />
              </div>
            </>
          )}
        </ContentArea>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
