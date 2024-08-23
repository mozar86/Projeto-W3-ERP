import React from "react";
import { SidebarContainer, Logo, ContactButton, SidebarContent, StyledNavLink } from "./Sidebar-Styles";

interface SidebarProps {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarContent isOpen={isOpen}>
        <Logo src="../src/assets/logo.png" alt="w3ERP" />
        <StyledNavLink to={'/dashboard'}>
          Dashboard
        </StyledNavLink>
        <StyledNavLink to={'/predicoes'}>
          Predições
        </StyledNavLink>
        <StyledNavLink to={'/produtos'}>
          Produtos
        </StyledNavLink>
        <ContactButton src="/path/to/contact-button.png" alt="Fale Conosco" />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

/* Perguntar a Pedro pq está dando erro

<DashboardIcon src="../src/assets/dashboard-icon.png" alt="Dashboard" />
<PredicoesIcon src="../src/assets/predicoes-icon.png" alt="predições" />
<ProdutosIcon src="../src/assets/produtos-icon.png" alt="produtos" />

Estilos:

export const DashboardIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const PredicoesIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const ProdutosIcon = styled.img`
  width: 25px;
  height: 25px;
`;
*/