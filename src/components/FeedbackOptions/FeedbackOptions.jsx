// import PropTypes from 'prop-types';
import { Tittle, Button } from './FeedbackOptions.styled';
import { Box } from '../common/Box';

export const FeedbackOptions = () => {
  return (
    <>
      <Tittle>Please leave feedback</Tittle>
      <Box display="flex" ml="40px">
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </Box>
    </>
  );
};
