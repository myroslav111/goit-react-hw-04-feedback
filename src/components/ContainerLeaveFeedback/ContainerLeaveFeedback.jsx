import React from 'react';
import BlockButtons from './BlockButtons';
import { WrapLeaveFeedback, Title } from './ContainerLeaveFeedback.styled';

const ContainerLeaveFeedback = ({
  title,
  onupValue,
  stateKeys,
}) => {
  return (
    <WrapLeaveFeedback>
      <Title>{title}</Title>
      <BlockButtons
        upValue={onupValue}
        stateKeys={stateKeys}
      />
    </WrapLeaveFeedback>
  );
};

export default ContainerLeaveFeedback;
