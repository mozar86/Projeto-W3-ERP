import React from "react";
import {
  DataCardContainer,
  DataCardTitle,
  DataCardSubtitle,
  DataCardInfoContainer,
  DataCardNumber,
  DataCardContentPercentage,
  CardTitle,
  CardNumber,
} from "./DataCard-Styles";

interface DataCardProps {
  title: string;
  title2: string;
  content: string;
  content2: string;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  title2,
  content,
  content2,
}) => {
  const percentage = parseInt(
    content2.replace("%", "").replace("+", "").replace("-", ""),
    10
  );
  const isNegative = content2.includes('-');

  const [firstWord, ...restWords] = title2.split(" ");

  return (
    <DataCardContainer>
      <DataCardInfoContainer>
        <CardTitle>
          <DataCardTitle>{title}</DataCardTitle>
          <DataCardSubtitle>
            &nbsp;
            <span>
              <strong>
                {firstWord}
              </strong> 
              &nbsp;{restWords.join(" ")}
            </span>
          </DataCardSubtitle>
        </CardTitle>
        <CardNumber>
          <DataCardNumber>{content}</DataCardNumber>
          <DataCardContentPercentage isNegative={isNegative}>{content2}</DataCardContentPercentage>
        </CardNumber>
      </DataCardInfoContainer>
    </DataCardContainer>
  );
};

export default DataCard;
