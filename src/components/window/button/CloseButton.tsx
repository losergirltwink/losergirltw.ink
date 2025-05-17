import React from 'react';
// import '98.css';

const CloseButton: React.FC<{}> = () => {
    const handleClick = () => {
        console.log('close button click event');
    };

    return (
      <button aria-label='Close' onClick={handleClick}></button>  
    );
}

export default CloseButton;