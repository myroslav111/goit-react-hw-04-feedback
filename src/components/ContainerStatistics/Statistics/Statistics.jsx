import React from 'react';
import { BoxOfParagraf, Value, PercentageSumbol } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <BoxOfParagraf>
      <p>
        Good:<Value good>{good}</Value>{' '}
      </p>
      <p>
        Neutral:<Value neutral>{neutral}</Value>{' '}
      </p>
      <p>
        Bad:<Value bad>{bad}</Value>{' '}
      </p>
      <p>
        Total:<Value>{total()}</Value>{' '}
      </p>
      <p>
        Positive feedback:<Value>{good > 0 ? percentage() : 0}</Value>
        <PercentageSumbol>%</PercentageSumbol>
      </p>
    </BoxOfParagraf>
  );
};

export default Statistics;
