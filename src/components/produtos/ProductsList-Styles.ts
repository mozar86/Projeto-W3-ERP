import styled from "styled-components";

export const ListTable = styled.div`
  margin-top: 1rem;
  overflow: hidden;
`;

export const ListRowTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  background-color: #001c98;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  border-radius: 12px 12px 0px 0px;
  color: #fff;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const ListCellTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex: 1;
  text-align: left;
  color: #c5cfff;
  font-weight: 500;
  font-size: 14px;

  &:first-child {
    flex: 0.5;
  }

  &:last-child {
    text-align: right;
  }
`;

export const ListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 0.75rem 1rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Sora', sans-serif;
  width: 100%;
  color: #212121;
  cursor: pointer;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const ListCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex: 1;
  text-align: left;
  height: 18px;
  color: #212121;
  font-weight: 400;
  font-size: 14px;

  &:first-child {
    flex: 0.5;
  }

  &:last-child {
    text-align: right;
  }
`;