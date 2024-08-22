import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer, Logo, ContactButton, SidebarContent } from "./Sidebar-Styles";

interface SidebarProps {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarContent isOpen={isOpen}>
        <Logo src="/path/to/logo.png" alt="w3ERP" />
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/predicoes">Predições</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <ContactButton src="/path/to/contact-button.png" alt="Fale Conosco" />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
