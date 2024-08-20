import React, { useState } from "react";
import ClientList from "../../components/dashboard/ClientList";
import DashboardBar from "../../components/dashboard/DashboardBar";
import Header from "../../components/dashboard/Header";
import ProductList from "../../components/dashboard/ProductList";
import Sidebar from "../../components/dashboard/Sidebar";
import { DashboardContainer, MainContent, SidebarWrapper, ContentWrapper } from "./Dashboard-Styles";


const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <DashboardContainer>
      <Header onToggleSidebar={handleToggleSidebar} />
      <MainContent>
        <SidebarWrapper>
          <Sidebar isVisible={isSidebarVisible} />
        </SidebarWrapper>
        <ContentWrapper>
          <DashboardBar />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ProductList />
            <ClientList />
          </div>
        </ContentWrapper>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
