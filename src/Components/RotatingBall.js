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
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const startAngle = getAngle(
      centerX,
      centerY,
      e.clientX - rect.left,
      e.clientY - rect.top
    );
    setStartAngle(startAngle);
    lastAngleRef.current = angle;
  };

  // Обработчик движения
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const currentAngle = getAngle(
      centerX,
      centerY,
      e.clientX - rect.left,
      e.clientY - rect.top
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
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Добавляем и удаляем обработчики событий
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
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
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default RotatingBall;
