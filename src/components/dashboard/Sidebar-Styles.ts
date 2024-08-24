import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "14.27%" : "6.09%")};
  background-color: #001C98;
  height: 100vh;
  transition: width 0.3s ease-in-out;
`;

export const SidebarContent = styled.div<SidebarProps>`
  padding: 20px;
`;

export const Logo = styled.img<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "120px" : "50px")};
  height: auto;
  margin-bottom: 20px;
  transition: width 0.3s ease-in-out;
`;

export const DivNavLink = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`;

export const StyledNavLink = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #7682C1;
    box-shadow: 0px 0px 10px #7682C1;
  }
`;

export const DashboardIcon = styled.img<SidebarProps>`
  width: 25px;
  height: 25px;
  margin-right: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  transition: margin-right 0.3s ease-in-out;
`;

export const PredicoesIcon = styled(DashboardIcon)``;
export const ProdutosIcon = styled(DashboardIcon)``;

export const ContactButtonDiv = styled.div`
  position: relative;
  margin-top: 20px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const ButtonImage = styled.img`
  position: absolute;
  margin-left: 12px;
  left: 10px; 
  top: -38px; 
  width: 80px; 
  z-index: 1; 
`;

export const ContactButton = styled.img`
  position: relative;
  margin-left: 12px;
  width: 100px; 
  height: auto;
  z-index: 0; 
`;
