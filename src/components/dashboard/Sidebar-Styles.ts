import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "15%" : "7.5%")};
  background-color: #001C98;
  height: 100vh;
  transition: width 0.3s ease-in-out;
`;

export const SidebarContent = styled.div<SidebarProps>`
  padding: 30px;
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
  margin-left: ${({ isOpen }) => (isOpen ? "-20px" : "0px")};
`;

export const StyledNavLink = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: ${({ isOpen }) => (isOpen ? "14px" : "10px")};
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(118, 130, 193, 0.5);
    box-shadow: 0px 0px 0px #7682C1;
    border-radius: 3px;
  }
`;

export const DashboardIcon = styled.img<SidebarProps>`
  width: 20px;
  height: 20px;
  margin-right: ${({ isOpen }) => (isOpen ? "8px" : "0")};
  transition: margin-right 0.3s ease-in-out;
`;

export const PredicoesIcon = styled(DashboardIcon)``;
export const ProdutosIcon = styled(DashboardIcon)``;

export const ContactButtonDiv = styled.div`
  position: relative;
  margin-top: 30px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const ButtonImage = styled.img`
  position: absolute;
  margin-left: -3px;
  left: 10px; 
  top: -45px; 
  width: 100px; 
  z-index: 1; 
`;

export const ContactButton = styled.img`
  position: relative;
  margin-left: -3px;
  width: 120px; 
  height: auto;
  z-index: 0; 
`;
