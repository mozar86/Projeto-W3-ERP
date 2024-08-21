import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: yellow;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

export const SidebarWrapper = styled.div`
  flex-basis: 250px;
  background-color: #162D59;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #eef2f7;
  overflow-y: auto;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
