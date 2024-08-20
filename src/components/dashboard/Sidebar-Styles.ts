import styled from "styled-components";

export const SidebarContainer = styled.div<{ isVisible: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: #162D59;
  padding: 1rem;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 2rem;
`;

export const NavLink = styled.a`
  display: block;
  color: #fff;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #00a3ff;
  }
`;

export const ContactButton = styled.img`
  margin-top: auto;
  cursor: pointer;
  width: 100%;
`;
