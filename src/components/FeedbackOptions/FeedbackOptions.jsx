import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ feedbackTypes, totalFeedback, positiveFeedbackPercentage }) => {


  return (
    <div className={css.wrap}>
      <div className={css.feedbackText}>
        <p className={css.feedbackText}>Good: {feedbackTypes.good}</p>
        <p className={css.feedbackText}>Neutral: {feedbackTypes.neutral}</p>
        <p className={css.feedbackText}>Bad: {feedbackTypes.bad}</p>
      </div>
      <div className={css.feedbackValue}>
        <p className={css.feedbackValue}>Total: {totalFeedback}</p>
         Positive: {positiveFeedbackPercentage}%
      </div>
    </div>
  );
};