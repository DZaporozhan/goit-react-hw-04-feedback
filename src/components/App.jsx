import { Component } from 'react';
import { Box } from './common/Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const id = e.target.id;
    switch (id) {
      case 'good':
        this.setState(preState => ({ good: preState.good + 1 }));
        break;

      case 'neutral':
        this.setState(preState => ({ neutral: preState.neutral + 1 }));
        break;

      case 'bad':
        this.setState(preState => ({ bad: preState.bad + 1 }));
        break;
      default:
        console.log('Invalid subscription type');
    }
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

    return (
      <Box display="flex" flexDirection="column">
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Box>
    );
  }
}
