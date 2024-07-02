import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ onClick }) => {
    return (
        <button className="floating-button" onClick={onClick}>
            <span className="plus-icon">Copy link</span>
        </button>
    );
};

export default FloatingButton;
