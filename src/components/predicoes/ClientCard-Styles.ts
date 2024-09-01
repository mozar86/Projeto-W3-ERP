import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

export const CardStatus = styled.p`
  font-size: 0.875rem;
  color: #4caf50;
`;

export const ProductList = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    font-size: 0.875rem;
    color: #888;
    text-align: left;
  }

  td {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }
`;

export const ProductItem = styled.tr`
  background-color: #f5f5f5;
  padding: 0.5rem;
  border-radius: 4px;

  td {
    padding: 0.5rem;
  }
`;
