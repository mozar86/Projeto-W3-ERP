import styled from "styled-components";

export const ProdutosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #212121;
`;

export const ContentArea = styled.div`
  width: 100%;
  padding-right: 2rem;
  background-color: #f5f5f5;
  margin-left: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const SearchBar = styled.input`
  width: 270px;
  padding: 0.75rem;
  margin: 0.5rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
  outline: none;
  font-size: 1rem;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

export const FilterIcon = styled.img`
  width: 40px;
  height: 40px;
  pointer-events: none;
`;

export const DashboardBar = styled.div`
  margin-top: -5px;
`;