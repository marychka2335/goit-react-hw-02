// import React from 'react';
import PropTypes from 'prop-types'; 
import css from './Statistics.module.css'

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={css.feedbackText}>Good:<span className={css.feedbackValue}>{good}</span></p>
      <p className={css.feedbackText}>Neutral:<span className={css.feedbackValue}>{neutral}</span></p>
      <p className={css.feedbackText}>Bad:<span className={css.feedbackValue}>{bad}</span></p>
      <p className={css.feedbackText}>Total:<span className={css.feedbackValue}>{total}</span> </p>
      <p className={css.feedbackText}>Positive feedback:<span className={css.feedbackValue}>{positivePercentage}%</span></p>
    </div>
  );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}