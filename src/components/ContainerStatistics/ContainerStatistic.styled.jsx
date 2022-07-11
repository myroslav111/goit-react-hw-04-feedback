import styled from '@emotion/styled';

export const SectionOfStatistic = styled.section`
  position: relative;
  background: linear-gradient(
      135deg,
      rgba(91, 36, 122, 0.45) 0%,
      rgba(27, 206, 223, 0.55) 100%
    ),
    /* url('https://images.pexels.com/photos/556663/pexels-photo-556663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'); */
      url('https://domf5oio6qrcr.cloudfront.net/medialibrary/9263/bigstock-Coffee-Cup-Cup-Of-Coffee-1375146.jpg');
  background-size: cover;
  background-position: center;
  height: calc(100% + 50px);
  width: 40%;
  top: -35px;
  left: -50px;
  padding: 10px 25px;
  box-shadow: $shadow;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: 'The Nautigal', cursive;
  font-size: 4em;
  margin-bottom: 15px;
  /* margin-top: 50px; */
`;

export const WrapStatisticText = styled.div`
  /* opacity: 0.95; */
`;

export const Paragraf = styled.p`
  font-family: 'The Nautigal', cursive;
  font-size: 25px;
`;
