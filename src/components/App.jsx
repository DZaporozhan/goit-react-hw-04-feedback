import { Component } from 'react';
import { Box } from './common/Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 7,
    neutral: 5,
    bad: 2,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <Box display="flex" flexDirection="column">
        <FeedbackOptions />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </Box>
    );
  }
}
