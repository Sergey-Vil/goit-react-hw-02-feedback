import React from 'react';
import css from './feedbackOptions.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map(option => (
    <button
      type="button"
      name={option}
      className={css.btn__good}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
  return <div className={css.btn__list}>{elements}</div>;
}

export default FeedbackOptions;
