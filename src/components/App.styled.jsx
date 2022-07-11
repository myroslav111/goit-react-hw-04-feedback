import styled from '@emotion/styled';

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#e6e6e6, #bbbbbb);
  font-family: 'Raleway', sans-serif;
`;

export const WrapStatisticWithFeedback = styled.main`
  position: relative;
  width: 550px;
  height: 330px;
  left: 30px;
  background-color: rgba(23, 23, 22, 0.9);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* background-color: white; */
`;
