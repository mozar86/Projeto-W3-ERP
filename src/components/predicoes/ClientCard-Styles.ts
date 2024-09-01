import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #212121;
  }
`;

export const ProductIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: #001c98;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;

  .client-icon {
    width: 40px;
    height: 40px;
    background-color: #e0e7ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;

    svg {
      width: 24px;
      height: 24px;
      color: #4a56e2;
    }
  }

  .client-name-status {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
    }

    .status {
      font-size: 0.875rem;
      color: #4caf50; /* Verde para status ativo */
    }
  }
`;

export const ProductList = styled.table`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
  border-collapse: collapse;

  th {
    font-size: 0.875rem;
    font-weight: 600;
    color: #7968e6;
    text-align: left;
    padding-bottom: 0.5rem;
  }

  td {
    font-size: 0.875rem;
    color: #212121;
    padding: 0.5rem 0;
    font-weight: 500;
  }
`;

export const ProductItem = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  td {
    font-weight: 600;
    &:last-child {
      text-align: right;
      color: #212121;
    }
  }
`;
