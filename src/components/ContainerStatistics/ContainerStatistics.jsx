import React from 'react';
import Statistics from './Statistics';
import {
  SectionOfStatistic,
  WrapStatisticText,
  Title,
  Paragraf,
} from './ContainerStatistic.styled';

const ContainerStatistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <SectionOfStatistic>
      <WrapStatisticText>
        <Title>{title}</Title>
        {total() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        ) : (
          <Paragraf>No feedback given</Paragraf>
        )}
      </WrapStatisticText>
    </SectionOfStatistic>
  );
};

export default ContainerStatistics;
