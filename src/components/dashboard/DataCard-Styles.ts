import styled from "styled-components";

export const DataCardContainer = styled.div`
  background-color: #02156A;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const DataCardTitle = styled.h3`
  font-size: 10px;
  color: #C5CFFF;
  margin-bottom: 5px;
`;

export const DataCardContent = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #C5CFFF;
`;

// Solicitado ao chatGPT para aguardar a substituição do código fornecido por Pedro
export const DataCardCircle = styled.div<{ percentage: number }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(#001c98 ${({ percentage }) => percentage}%, rgba(0, 0, 0, 0.1) ${({ percentage }) => percentage}% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const DataCardPercentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #C5CFFF;
`;
