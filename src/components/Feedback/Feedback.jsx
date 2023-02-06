import { Component } from 'react';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import css from './feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
        100
    );
  };

  hendleVoteGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  hendleVoteNeutral = e => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    console.log(e.target);
  };
  hendleVoteBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <section>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.btn__list}>
          <button
            type="button"
            className={css.btn__good}
            onClick={this.hendleVoteGood}
          >
            Good
          </button>
          <button
            type="button"
            className={css.btn__neutral}
            onClick={this.hendleVoteNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.btn__bad}
            onClick={this.hendleVoteBad}
          >
            Bad
          </button>
        </div>
        <h2 className={css.title__statistics}>Statistics</h2>
        {total ? (
          <div className={css.desc__statistics}>
            <p>
              <span>Good:</span> {this.state.good}
            </p>
            <p>
              <span>Neutral:</span> {this.state.neutral}
            </p>
            <p>
              <span>Bad:</span> {this.state.bad}
            </p>
            <p>
              <span>Total:</span> {total}
            </p>
            {percent ? (
              <p>
                <span>PositiveFeedback:</span> {percent}%
              </p>
            ) : (
              <p>
                <span>PositiveFeedback:</span> 0 %
              </p>
            )}
          </div>
        ) : (
          <p>There is no feedback</p>
        )}
      </section>
    );
  }
}
