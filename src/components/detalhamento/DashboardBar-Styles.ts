import styled from "styled-components";

export const DashboardBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 24px;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 1rem;
    color: #212121;
  }
`;

export const SetaSair = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.h2`
  color: #001C98;
  margin-top: 0.6rem;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const DashboardBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const DataCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
