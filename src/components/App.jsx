import { Component } from 'react';
import css from './App.module.css';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification'
import { Description } from './Description/Description';

export class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}

countTotalFeedback = () => {
  return Object.values(this.state).reduce((acc, item) => acc + item, 0)
  }
  
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
    return 0
  }
   return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }
  
  onLeaveFeedback = (evt) => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] +1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className={css.container}>
<Description
 />          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        <Section title="Statistics">
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message='No feedback given'/> }
        </Section>
      </div>
    )
  }
}