import React from 'react';
// import '98.css';

const MaximizeButton: React.FC<{}> = () => {
    const handleClick = () => {
        console.log('maximize button click event');
    };

    return (
      <button aria-label='Maximize' onClick={handleClick}></button>  
    );
}

export default MaximizeButton;