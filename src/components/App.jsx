import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import styles from './App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementCategory = (category) => {
    this.setState((prevState) => ({
      [category]: prevState[category] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total !== 0 ? (good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage().toFixed(2);
    const options = Object.keys(this.state);

    return (
      <div className={styles.app}>
        <Section title="Будь ласка, залиште відгук">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementCategory}
          />
        </Section>

        <Section title="Статистика">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  }
}

export default App;