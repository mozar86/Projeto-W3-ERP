import React from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import {
  ContentArea,
  DashboardBarBackground,
  PredicaoContainer,
  ListWrapper,
} from "./Predicao-Styles";
import DepletingProductsList from "../../components/predicao/DepletingProductsList";
import HistoricalList from "../../components/predicao/HistoricalList";

const Predicao: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PredicaoContainer>
      <Sidebar isOpen={isSidebarOpen} />
      <ContentArea>
        <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
        <DashboardBarBackground>
          <ListWrapper>
            <HistoricalList />
            <DepletingProductsList />
          </ListWrapper>
        </DashboardBarBackground>
      </ContentArea>
    </PredicaoContainer>
  );
};

export default Predicao;
