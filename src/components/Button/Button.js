import React from 'react';
import classes from './Button.css';

const button = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.btn}>
        <button type='button'>Log In</button>
      </div>
    </div>
  );
};

export default button;
