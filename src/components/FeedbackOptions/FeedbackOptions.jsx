// import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from '../common/Box';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
      <Box display="flex" ml="40px">
        {option.map(buttonName => {
          return (
            <Button key={buttonName} id={buttonName} onClick={onLeaveFeedback}>
              {buttonName.toUpperCase()}
            </Button>
          );
        })}
      </Box>
    </>
  );
};
