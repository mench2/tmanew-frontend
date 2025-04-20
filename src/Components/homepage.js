import './Home.css';
import React from 'react';
import RotatingBall from './RotatingBall';
import { useTelegram } from '../hooks/useTelegram';

const Home = () => {
  const { userId } = useTelegram();
  
  return (
    <>
      <h1>Adeita</h1>
      <RotatingBall userId={userId || 'guest'} />
    </>
  );
};

export { Home };
