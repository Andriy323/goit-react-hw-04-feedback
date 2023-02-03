import PropTypes from 'prop-types';
import css from './feadback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.containerBtn}>
      {options.map(btnName => (
        <button
          key={btnName}
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
