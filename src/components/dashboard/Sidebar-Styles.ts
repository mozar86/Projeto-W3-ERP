import styled from "styled-components";

interface SidebarContainerProps {
  isOpen: boolean;
}

interface SidebarContentProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: ${({ isOpen }) => (isOpen ? "14.27%" : "6.09%")};
  height: 100vh;
  transition: width 0.3s ease;
  background-color: #001C98;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarContent = styled.div<SidebarContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 1rem;
`;

export const Logo = styled.img`
  width: 80%;
  margin-bottom: 2rem;
`;

export const ContactButton = styled.img`
  width: 80%;
  margin-top: auto;
`;

export const SidebarLink = styled.a`
  display: block;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;


