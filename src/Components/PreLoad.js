import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './PreloadWords.css';

const words = ["Loading", "Please", "Wait"];

const PreloadWords = () => {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setFinished(true), 1000);
    }
  }, [index]);

  const wordSpring = useSpring({
    opacity: finished ? 0 : 1,
    transform: finished ? 'translateY(-40px)' : 'translateY(0px)',
  });

  const lastWordSpring = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: finished ? 'translateY(-100vh)' : 'translateY(0px)' },
    config: { duration: 2000 },
  });

  return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!finished && (
        <animated.div style={wordSpring} className="word">
          {words[index]}
        </animated.div>
      )}
      {finished && (
        <animated.div style={{ ...lastWordSpring, position: 'absolute', top: '50%' }} className="word">
          {words[words.length - 1]}
        </animated.div>
      )}
    </div>
  );
};

export default PreloadWords;
