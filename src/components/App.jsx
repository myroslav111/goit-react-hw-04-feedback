import { useState } from 'react';
import ContainerStatistics from './ContainerStatistics';
import ContainerLeaveFeedback from './ContainerLeaveFeedback';
import { MainBody, WrapStatisticWithFeedback } from './App.styled';

export default function App() {
  const [valueGood, setValueGood] = useState(0);
  const [valueNeutral, setValueGoodNeutral] = useState(0);
  const [valueBad, setValueGoodBad] = useState(0);
  const nameButton = ['Good', 'Neutral', 'Bad'];
  // сумма велью секции фидбек
  const countTotalFeedback = () => {
    const totalFidback = valueGood + valueNeutral + valueBad;
    return totalFidback;
  };
  // при клике на кнопку меняем велью
  const upValueState = e => {
    const currentButton = e.currentTarget.id;
    switch (currentButton) {
      case nameButton[0]:
        setValueGood(valueGood + 1);
        break;

      case nameButton[1]:
        setValueGoodNeutral(valueNeutral + 1);
        break;

      case nameButton[2]:
        setValueGoodBad(valueBad + 1);
        break;

      default:
        break;
    }
  };
  // высчитываем процент позитивных отзывов
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = (valueGood / countTotalFeedback()) * 100;
    return Math.floor(positiveFeedbackPercentage);
  };

  return (
    <MainBody>
      <WrapStatisticWithFeedback>
        <ContainerStatistics
          title={'Statistics'}
          good={valueGood}
          neutral={valueNeutral}
          bad={valueBad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />

        <ContainerLeaveFeedback
          title={'Please leave feedback'}
          onupValue={upValueState}
          stateKeys={nameButton}
        />
      </WrapStatisticWithFeedback>
    </MainBody>
  );
}
