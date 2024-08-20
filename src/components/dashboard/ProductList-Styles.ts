import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ListTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const ListButton = styled.button`
  background-color: #00a3ff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #007bbf;
  }
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
