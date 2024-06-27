import FloatingButton from './FloatingButton';
import React from 'react';
import './friends.css'; 

const Friends = () => {
    const handleClick = () => {
       alert('Adeita')
    };
    return (
        <>
        <div>
            <h1>invite Friends</h1>
        </div>
        <div className='spisok'>
            тут подтягивается список друганов
            
            <h3>Типо друг</h3>
            <h3>Типо друг</h3>
            <h3>Типо друг</h3>
            <h3>Типо друг</h3>
        </div>
        <FloatingButton onClick={handleClick} />
        </>
    );
};
  
  
  export {Friends};