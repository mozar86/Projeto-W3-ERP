import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02156A;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px; 
`;


interface RadialBarDashboardProps {
  percentageGraphic: number;
}

const RadialBarDashboard: React.FC<RadialBarDashboardProps> = ({ percentageGraphic }) => {
  const defaultOptions: ApexCharts.ApexOptions = {
    fill: { colors: ['#5c5da0'] }, 
    grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
    chart: {
      width: 70,
      height: 70,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '45%' },
        track: { background: '#02156A' }, 
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 5,
            fontSize: '12px',
            color: '#FFFFFF', 
            fontWeight: 'bold',
          },
        },
      },
    },
  };

  return (
    <Container>
      <Chart
        series={[percentageGraphic]}
        width={80}
        height={80}
        options={defaultOptions}
        type="radialBar"
      />
    </Container>
  );
};

export default RadialBarDashboard;
