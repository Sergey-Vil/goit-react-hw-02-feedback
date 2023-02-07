// import { Feedback } from './Feedback/Feedback';

import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

// import css from './feedback.module.css';
import Section from './Section/Section';

export class App extends Component {
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

  hendleVoteIncrement = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.hendleVoteIncrement}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        </Section>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Feedback />
//     </div>
//   );
// };
