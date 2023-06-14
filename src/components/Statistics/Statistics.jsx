import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <div>Добре: {good}</div>
      <div>Нейтрально: {neutral}</div>
      <div>Погано: {bad}</div>
      <div>Всього: {total}</div>
      <div>Відсоток позитивних відгуків: {positivePercentage}%</div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
