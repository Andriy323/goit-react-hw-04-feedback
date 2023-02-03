import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
import css from './statisti.module.css';

export default function Statistics({
  total,
  good,
  bad,
  neutral,
  positivePercentage,
}) {
  return (
    <>
      {total > 0 ? (
        <div>
          <ul className={css.list}>
            <li className={css.item}>
              Good: <span className={css.pretitle}>{good}</span>
            </li>
            <li className={css.item}>
              Neutral: <span className={css.pretitle}>{neutral}</span>
            </li>
            <li className={css.item}>
              Bad: <span className={css.pretitle}>{bad}</span>
            </li>
            <li className={css.item}>
              Total: <span className={css.pretitle}>{total}</span>
            </li>
            <li className={css.item}>
              Positive feedback: <span className={css.pretitle}>{positivePercentage}</span>%
            </li>
          </ul>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
