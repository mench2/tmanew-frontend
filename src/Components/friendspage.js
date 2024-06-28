import FloatingButton from './FloatingButton';
import React, { useEffect } from 'react';
import './friends.css'; 
const tg = window.Telegram

const Friends = () => {

    useEffect(()=> {
            tg.ready;
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <div>
            <button onClick={onClose}>Press f</button>
        </div>
    );
};
  
  
  export {Friends};