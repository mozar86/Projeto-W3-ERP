import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #001C98;

  svg {
    margin-right: 0.5rem;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;

    &.active {
      background-color: #00a800;
    }

    &.inactive {
      background-color: #FF0000;
    }
  }
`;

export const ListTable = styled.div`
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const ListCell = styled.div`
  flex: 1;
  text-align: left;
  color: #333;
  font-weight: 500;

  &:first-child {
    flex: 0.5;
  }

  &:last-child {
    text-align: right;
  }
`;
