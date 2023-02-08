import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  console.log(good, neutral, bad, total, positivePercentage);
  return (
    <>
      {total ? (
        <div className={css.desc__statistics}>
          <p className={css.data}>
            <span className={css.desc}>Good:</span> {good}
          </p>
          <p className={css.data}>
            <span className={css.desc}>Neutral:</span> {neutral}
          </p>
          <p className={css.data}>
            <span className={css.desc}>Bad:</span> {bad}
          </p>
          <p className={css.data}>
            <span className={css.desc}>Total:</span> {total}
          </p>
          <p className={css.data}>
            <span className={css.desc}>PositiveFeedback:</span>{' '}
            {positivePercentage}%
          </p>
        </div>
      ) : (
        <p className={css.statistic_data}>There is no feedback</p>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
