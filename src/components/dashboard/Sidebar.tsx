import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer, Logo, ContactButton } from "./Sidebar-Styles";



const Sidebar = ({ isVisible }) => {
  return (
    <SidebarContainer isVisible={isVisible}>
      <Logo src="/path/to/logo.png" alt="w3ERP" />
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/predicoes">Predições</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <ContactButton src="/path/to/contact-button.png" alt="Fale Conosco" />
    </SidebarContainer>
  );
};

export default Sidebar;
