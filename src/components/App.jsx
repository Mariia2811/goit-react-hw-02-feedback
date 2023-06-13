import React from "react";
import { FeedbackForm } from './FeedbackForm/FeedBackForm'
import { Statistics } from './Statistics/Statistics'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackForm />
      <Statistics/>
    </div>
  );
};
