import React from "react";
import { DataCardContainer, DataCardTitle, DataCardContent, DataCardCircle, DataCardPercentage } from "./DataCard-Styles";

interface DataCardProps {
  title: string;
  title2: string;
  content: string;
  content2: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, title2, content, content2 }) => {
  const percentage = parseInt(content2.replace('%', '').replace('+', '').replace('-', ''), 10);

  return (
    <DataCardContainer>
      <DataCardTitle>
        {title} {title2}
      </DataCardTitle>
      <DataCardContent>
        {content} {content2}
      </DataCardContent>
      <DataCardCircle percentage={percentage}>
        <DataCardPercentage>
          {content2}
        </DataCardPercentage>
      </DataCardCircle>
    </DataCardContainer>
  );
};

export default DataCard;
