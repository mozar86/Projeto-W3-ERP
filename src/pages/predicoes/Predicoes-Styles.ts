import styled from "styled-components";

export const PredicoesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
  color: #333;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const SearchBar = styled.input`
  width: 270px;
  padding: 1rem;
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

export const ContentArea = styled.div`
  width: 100%;
  padding-right: 2rem;
  background-color: #f5f5f5;
  margin-left: 2rem;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding-top: 2rem;
  }
`;
