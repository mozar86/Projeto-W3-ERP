import styled from "styled-components";

export const DashboardBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #001C98;
  border-radius: 24px;
`;

export const Title = styled.h2`
  color: #fff;
  margin-top: 0.6rem;
  margin-left: 15px;
`;

export const DashboardBarTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterMenu = styled.select`
  margin-top: 0.6rem;
  margin-bottom: 2rem;
  margin-right: 15px;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const DataCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
