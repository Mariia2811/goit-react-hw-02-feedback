import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.notification}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};