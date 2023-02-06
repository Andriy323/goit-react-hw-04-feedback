import { useState } from 'react';
import Statistics from './Statistic/Statistic';
import Section from './Section/Section';
import FeedbackOptions from './Feeadback/Feedback';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = votes;

  const onLeaveFeedback = name => {
    setVotes(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round(((total - (bad + neutral)) / total) * 100);
  };

  return (
    <div>
      <Section title="Pleas leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
