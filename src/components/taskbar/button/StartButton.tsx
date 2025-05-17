import React from 'react';
import '98.css';
import './StartButton.css';
import startIcon from '/src/assets/start.png';

const StartButton: React.FC<{}> = () => {
    return (
        <div className='start-button-items'>
            <button className='items'>
                <span>
                    <img src={startIcon} className='start-icon' aria-label='start icon'></img>
                </span>
                <span>
                    <strong className='start-text'>
                        Start
                    </strong>
                </span>
            </button>
        </div>
        
    );
}

export default StartButton;