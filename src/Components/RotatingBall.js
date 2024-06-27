import React from 'react';
import './RotatingBall.css';

const RotatingBall = () => {
  return (
    <div className="container">
      <div className="circle">
        <div className="ball"></div>
      </div>
      <div className="line">
        <div className="line-ball"></div>
      </div>
    </div>
  );
};

export default RotatingBall;
