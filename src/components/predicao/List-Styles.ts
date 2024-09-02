import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;

export const ListTitle = styled.h3`
  color: #001C98;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const ListTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ListRowTitles = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 0.75rem;
  border-radius: 8px;
`;

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListCellTitles = styled.div`
  color: #757575;
  font-weight: 500;
  font-size: 0.875rem;
  flex: 1;
  text-align: left;
  
  &:nth-child(1) {
    flex: 0.5;
  }
`;

export const ListCell = styled.div`
  color: #212121;
  font-size: 0.875rem;
  flex: 1;
  text-align: left;

  &:nth-child(1) {
    flex: 0.5;
  }
`;
