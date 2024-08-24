import React from "react";
import {
  SidebarContainer,
  Logo,
  ContactButton,
  SidebarContent,
  StyledNavLink,
  DashboardIcon,
  PredicoesIcon,
  ProdutosIcon,
  DivNavLink,
  ButtonImage,
  ContactButtonDiv,
} from "./Sidebar-Styles";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarContent isOpen={isOpen}>
        <Logo src={isOpen ? "../src/assets/logo.png" : "../src/assets/logo-w3.png"} alt="w3ERP" isOpen={isOpen} />
        <DivNavLink isOpen={isOpen}>
          <StyledNavLink to="/dashboard" isOpen={isOpen}>
            <DashboardIcon src="../src/assets/dashboard-icon.png" alt="Dashboard" isOpen={isOpen} />
            {isOpen && "Dashboard"}
          </StyledNavLink>
          <StyledNavLink to="/predicoes" isOpen={isOpen}>
            <PredicoesIcon src="../src/assets/predicoes-icon.png" alt="Predições" isOpen={isOpen} />
            {isOpen && "Predições"}
          </StyledNavLink>
          <StyledNavLink to="/produtos" isOpen={isOpen}>
            <ProdutosIcon src="../src/assets/produtos-icon.png" alt="Produtos" isOpen={isOpen} />
            {isOpen && "Produtos"}
          </StyledNavLink>
        </DivNavLink>
        <ContactButtonDiv isOpen={isOpen}>
          <ButtonImage src="../src/assets/contact-button-2.png" alt="Botão Fale Conosco" />
          <ContactButton src="../src/assets/contact-button.png" alt="Fale Conosco" />
        </ContactButtonDiv>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
