import { Tittle, StatText } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <Tittle>Statistics</Tittle>
      <StatText>Good {good}</StatText>
      <StatText>Neutral {neutral}</StatText>
      <StatText>Bad {bad}</StatText>
      <StatText>Total {total}</StatText>
      <StatText>Positive feedback {(good / total) * 100}%</StatText>
    </>
  );
};
