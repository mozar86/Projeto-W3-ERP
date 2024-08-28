import styled from "styled-components";

export const DataCardContainer = styled.div`
  display: flex;
  background-color: #02156A;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 80px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const DataCardPercentage = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #c5cff9;
  position: absolute;
`;

export const DataCardContentPercentage = styled.div<{ isNegative: boolean }>`
  display: flex;
  align-items: center;
  font-size: 8px;
  font-weight: lighter;
  color: #ffffff;
  background-color: ${({ isNegative }) => (isNegative ? '#FF3333' : '#00C247')};
  padding: 5px 10px;
  border-radius: 20px;
  margin-top: 8px;
  margin-left: 10px;
  height: 16px;
`;

export const DataCardCircle = styled.div<{ percentage: number }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(
    #5c5da0 ${({ percentage }) => percentage}%,
    rgba(0, 0, 0, 0.1) ${({ percentage }) => percentage}% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DataCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardTitle = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const DataCardTitle = styled.div`
  display: flex;
  font-size: 10px;
  color: #c5cff9;
`;

export const DataCardSubtitle = styled.div`
  font-size: 10px;
  color: #c5cff9;

  strong {
    font-weight: bold;
  }

  span {
    font-size: 10px;
  }
`;

export const CardNumber = styled.div`
  display: flex;
  margin-top: 3px;
`;

export const DataCardNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 5px;
`;



