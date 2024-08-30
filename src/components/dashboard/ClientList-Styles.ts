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

export const TitleClients = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: #001c98;
`;

export const ClientIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  color: #fff;
  margin-top: 5px;
  margin-left: 6px;
`;

export const ButtonTitle = styled.button<{ filter: "alta" | "baixa" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  cursor: pointer;
  background-color: ${({ filter }) => (filter === "alta" ? "#00a800" : "#ff0000")};
  border: none;
  padding: 0;
  color: #FFFFFF;
  width: 110px;
  height: 30px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  left: ${({ filter }) => (filter === "alta" ? "calc(110px - 42%)" : "0")};

  &:hover {
    opacity: 0.8;
  }
`;

export const ListTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #212121;
  margin-left: 20px;

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
      background-color: #ff0000;
    }
  }
`;

export const ListTable = styled.div`
  margin-top: 1rem;
  overflow: hidden;
`;

export const ListRowTitles = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  background-color: #001c98;
  border-bottom: 1px solid #e0e0e0;
  width: 530px;
  border-radius: 12px 12px 0px 0px;
  color: #fff;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const ListCellTitles = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-align: left;
  color: #c5cfff;
  font-weight: 500;

  &:first-child {
    flex: 0.5;
  }

  &:last-child {
    text-align: right;
  }
`;

export const ListRow = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  background-color: #001c98;
  border-bottom: 1px solid #e0e0e0;
  width: 530px;
  border-radius: 12px 12px 0px 0px;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const ListCell = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-align: left;
  color: #212121;
  font-weight: 500;

  &:first-child {
    flex: 0.5;
  }

  &:last-child {
    text-align: right;
  }
`;
