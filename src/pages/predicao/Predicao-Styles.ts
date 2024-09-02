import styled from "styled-components";

export const PredicaoContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f4f4f4;
`;

export const DashboardBarBackground = styled.div`
  background-image: url("../src/assets/dashboard-background.png"); 
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;
