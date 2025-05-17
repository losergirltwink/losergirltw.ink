import React from 'react';
// import '98.css';

const MinimizeButton: React.FC<{}> = () => {
    const handleClick = () => {
        console.log('minimize button click event');
    };
    
    return (
      <button aria-label='Minimize' onClick={handleClick}></button>  
    );
}

export default MinimizeButton;