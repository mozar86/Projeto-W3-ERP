import styled from "styled-components";

export const DetailingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ContentArea = styled.div<{ isSidebarOpen: boolean }>`
  width: 100%;
  padding-right: 2rem;
  background-color: #f5f5f5;
  margin-left: 2rem;
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