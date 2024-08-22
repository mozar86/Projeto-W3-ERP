import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ContentArea = styled.div<{ isSidebarOpen: boolean }>`
  width: 100%;
  padding-right: 2rem;
  background-color: #f5f5f5;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "14.27%" : "6.09%")};
  transition: margin-left 0.3s ease;
`;



export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 14.27%;
  background-color: #020e56;
  transition: width 0.3s ease;

  .sidebar-collapsed & {
    width: 6.09%;
  }
`;

export const MainContent = styled.main<{ isSidebarOpen: boolean }>`
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #ffffff;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "14.27%" : "6.09%")};
  transition: margin-left 0.3s ease;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #020e56;
  margin-bottom: 1rem;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;
