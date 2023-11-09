import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { StatisticsList } from './Statistic/Statistics';

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
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <dir
          style={{
            width: '60%' ,
            marginRight: 'auto' ,
            marginLeft: 'auto',
            padding: '12px 16px',
            borderRadius: 5,
            backgroundColor: 'gray',
            color: 'white',
          }}
        >
          <h1 style={{
            textAlign: 'center',
          }

          }>Please leave feedback</h1>

          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </dir>
        <dir>
          {totalFeedback > 0 ? (
            <StatisticsList
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <h2 style={{
              textAlign: 'center',
            }
  
            }>There is no feedback</h2>
          )}
        </dir>
      </>
    );
  }
}
