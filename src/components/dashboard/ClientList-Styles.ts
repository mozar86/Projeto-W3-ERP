import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #001C98;
  
  img {
    margin-right: 0.5rem;
  }
`;

export const StatusButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#00C247" : "#FF4D4D")};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const ListTable = styled.div`
  margin-top: 1rem;
`;

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const ListCell = styled.div`
  flex: 1;
  text-align: center;
`;
