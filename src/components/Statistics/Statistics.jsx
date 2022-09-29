import { StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatText>Good {good}</StatText>
      <StatText>Neutral {neutral}</StatText>
      <StatText>Bad {bad}</StatText>
      <StatText>Total {total}</StatText>
      <StatText>Positive feedback {positivePercentage}%</StatText>
    </>
  );
};
