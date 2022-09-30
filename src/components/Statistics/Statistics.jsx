import { StatText } from './Statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
