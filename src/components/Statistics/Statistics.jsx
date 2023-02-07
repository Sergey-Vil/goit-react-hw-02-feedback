import React from 'react';
import css from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
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
          {positivePercentage ? (
            <p className={css.data}>
              <span className={css.desc}>PositiveFeedback:</span>{' '}
              {positivePercentage}%
            </p>
          ) : (
            <p className={css.data}>
              <span className={css.desc}>PositiveFeedback:</span> 0 %
            </p>
          )}
        </div>
      ) : (
        <p className={css.statistic_data}>There is no feedback</p>
      )}
    </>
  );
}

export default Statistics;
