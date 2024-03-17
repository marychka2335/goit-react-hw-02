import { useState, useEffect } from 'react';
import './App.module.css';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [countTotalFeedback, onLeaveFeedback] = useState(() => {
    const savedType = window.localStorage.getItem('typeCount');
    if (savedType !== null) {
      return JSON.parse(savedType);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleFeedbackTypeChange = type => {
    onLeaveFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleReset = () => {
    onLeaveFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('typeCount', JSON.stringify(countTotalFeedback));
  }, [countTotalFeedback]);

  const { good, neutral, bad } = countTotalFeedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round(((good + neutral) / totalFeedback) * 100);
  const hasFeedback = totalFeedback > 0;

  return (
    <div className="content">
      <Description />
      <Options
        handleFeedbackTypeChange={handleFeedbackTypeChange}
        handleReset={handleReset}
        hasFeedback={hasFeedback}
      />
      {hasFeedback ? (
        <FeedbackOptions
          feedbackTypes={countTotalFeedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};