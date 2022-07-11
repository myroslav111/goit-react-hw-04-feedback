import styled from '@emotion/styled';

export const WrapLeaveFeedback = styled.section`
  position: absolute;
  width: calc(60% - 40px);
  height: 100%;
  top: 0;
  left: 40%;
  display: flex;
  flex-flow: column nowrap;
  padding-left: 20px;
`;

export const Title = styled.h1`
  /* font-size: 3.2em; */
  /* font-family: 'The Nautigal', cursive; */
  margin-bottom: 50px;
  margin-top: 50px;
  /* color: black; */
  position: relative;
  font-size: 1.3em;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.7em;
  outline: none;
  animation: animate 8s linear infinite;
`;
