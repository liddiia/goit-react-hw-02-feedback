import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const percent = (good / total) * 100;
    return percent.toFixed();
  };

render() {
      return <div>
      <Section
      state={this.state}
      onLeaveFeedback={this.onLeaveFeedback}
      countTotalFeedback={this.countTotalFeedback()}
      countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>
    </div>;
    }
}
