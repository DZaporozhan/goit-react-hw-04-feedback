import { Component } from 'react';
import { Box } from './common/Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Message/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const id = e.target.id;
    this.setState({ [id]: this.state[id] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return ((good / total) * 100).toFixed(2);
  };

  options = () => {
    return Object.keys(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );
    const option = this.options();
    const isFeedback = !total;
    console.log(isFeedback);

    return (
      <Box display="flex" flexDirection="column">
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
