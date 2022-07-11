import styled from '@emotion/styled';

export const BoxOfParagraf = styled.div`
  font-family: 'The Nautigal', cursive;
  font-size: 20px;
`;

export const Value = styled.span`
  font-family: 'The Nautigal', cursive;
  font-size: 25px;
  margin-left: 15px;
  color: ${props => {
    if (props.bad) {
      return 'red';
    } else if (props.neutral) {
      return 'yellow';
    } else {
      return 'hotpink';
    }
  }};
`;

export const PercentageSumbol = styled.span`
  font-family: 'The Nautigal', cursive;
  font-size: 25px;
  margin-left: 5px;
  color: hotpink;
`;
