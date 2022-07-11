import styled from '@emotion/styled';

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  position: relative;
  margin: 0;
  padding: 5px 12px;
  height: 30px;
  width: 90px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-size: 9px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    animation: rotate 0.7s ease-in-out both;
  }

  border: 1px solid;
  overflow: hidden;
  position: relative;
  &:after {
    background: rgba(27, 206, 223, 0.55);
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

export const ButtonText = styled.span`
  padding: 10px 17px;
  color: #164ca7;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.7px;
  &:hover {
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }
`;
