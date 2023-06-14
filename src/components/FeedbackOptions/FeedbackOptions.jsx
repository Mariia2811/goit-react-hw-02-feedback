import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedbackOptions}>
      {options.map((option) => (
        <li key={option}>
          <button onClick={() => onLeaveFeedback(option)} type="button">
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
