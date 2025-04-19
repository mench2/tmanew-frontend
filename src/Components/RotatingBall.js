import React, { useState, useEffect, useRef } from 'react';
import './RotatingBall.css';

const RotatingBall = () => {
  const [angle, setAngle] = useState(0);
  const [circles, setCircles] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const containerRef = useRef(null);
  const lastAngleRef = useRef(0);

  // Функция для определения угла между точками
  const getAngle = (x1, y1, x2, y2) => {
    return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  };

  // Обработчик начала перетаскивания
  const handleStart = (e) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Получаем координаты касания/клика
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const startAngle = getAngle(
      centerX,
      centerY,
      clientX - rect.left,
      clientY - rect.top
    );
    setStartAngle(startAngle);
    lastAngleRef.current = angle;
  };

  // Обработчик движения
  const handleMove = (e) => {
    if (!isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Получаем координаты касания/движения мыши
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const currentAngle = getAngle(
      centerX,
      centerY,
      clientX - rect.left,
      clientY - rect.top
    );

    let newAngle = lastAngleRef.current + (currentAngle - startAngle);
    
    // Проверяем, завершился ли полный круг
    if (newAngle - angle > 350) {
      setCircles(prev => prev + 1);
    } else if (angle - newAngle > 350) {
      setCircles(prev => prev - 1);
    }
    
    setAngle(newAngle);
  };

  // Обработчик окончания перетаскивания
  const handleEnd = () => {
    setIsDragging(false);
  };

  // Добавляем и удаляем обработчики событий
  useEffect(() => {
    const ball = containerRef.current.querySelector('.ball');
    
    // Добавляем обработчики для мыши
    ball.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    
    // Добавляем обработчики для тач-событий
    ball.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
    
    return () => {
      // Удаляем обработчики для мыши
      ball.removeEventListener('mousedown', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      
      // Удаляем обработчики для тач-событий
      ball.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, angle, startAngle]);

  return (
    <div className="container" ref={containerRef}>
      <div className="circles-counter">Круги: {circles}</div>
      <div className="circle">
        <div 
          className="ball"
          style={{
            transform: `rotate(${angle}deg) translateY(-100px)`,
          }}
        />
      </div>
    </div>
  );
};

export default RotatingBall;
