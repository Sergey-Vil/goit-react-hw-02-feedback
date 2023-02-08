import React from 'react';
import PropTypes from 'prop-types';

import css from './feedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map(option => (
    <button
      key={option}
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
