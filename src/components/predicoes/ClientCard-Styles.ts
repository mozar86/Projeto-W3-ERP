import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardContainer = styled.div`
  background-color: white;
  width: 250px;
  min-height: 200px;  /* Altura mínima consistente para todos os cards */
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 11px;
    font-weight: 600;
    color: #212121;
    padding-left: 10px;
    margin: 0;
    white-space: nowrap;  /* Evita quebra de linha */
    overflow: hidden;
    text-overflow: ellipsis;  /* Mostra reticências se o texto for muito longo */
  }

  h3 {
    font-size: 11px;
    font-weight: 400;
    color: #00c247;
    margin-left: 4px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconElipse = styled.img`
  width: 5px;
  height: 5px;
  margin-left: 10px;
`;

export const ProductIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  color: #001c98;
`;

export const SetaImage = styled.img`
  width: 20px;
  height: 20px;
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
    margin-bottom: 3px;

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
      font-size: 11px;
      color: #4caf50;
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
  text-decoration: none !important;

  th {
    font-size: 11px;
    font-weight: 600;
    color: #424242;
    text-align: left;
    padding-bottom: 0.5rem;
  }

  td {
    font-size: 11px;
    color: #424242;
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
    font-weight: 400;
    &:last-child {
      text-align: right;
      color: #424242;
    }
  }
`;
