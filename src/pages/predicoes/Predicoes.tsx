import React, { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { ContentArea } from "../dashboard/Dashboard-Styles";
import { PageTitle, PredicoesContainer, InputContainer, SearchBar, SearchIcon } from "./Predicoes-Styles";
import ClientCard from "../../components/predicoes/ClientCard";

const Predicoes: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PredicoesContainer>
      <Sidebar isOpen={isSidebarOpen} />
      <ContentArea>
        <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
        <PageTitle>Predições</PageTitle>
        <InputContainer>
          <SearchBar placeholder="Pesquise uma palavra-chave" />
          <SearchIcon src="../src/assets/search-icon.png" alt="lupa" />
        </InputContainer>
        <div className="cards-container">
          <ClientCard />
        </div>
      </ContentArea>
    </PredicoesContainer>
  );
};

export default Predicoes;
