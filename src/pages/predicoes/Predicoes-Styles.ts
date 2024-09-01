import styled from "styled-components";

export const ContentArea = styled.div<{ isSidebarOpen: boolean }>`
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
  color: #333;
`;

export const SearchBar = styled.input`
  width: 50%;
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0 2rem;
`;
