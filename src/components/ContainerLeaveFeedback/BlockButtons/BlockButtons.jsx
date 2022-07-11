import React from 'react';
import { ButtonsWrap, Button, ButtonText } from './BlockButtons.styled';

const BlockButtons = ({ upValue, stateKeys }) => {
  return (
    <ButtonsWrap>
      {stateKeys.map(key => {
        return (
          <Button key={key} id={key} onClick={upValue} type="button">
            <ButtonText>{key}</ButtonText>
          </Button>
        );
      })}
    </ButtonsWrap>
  );
};

export default BlockButtons;
