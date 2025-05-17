import React from 'react';
// import '98.css';
import './Taskbar.css';
import StartButton from './button/StartButton';

const Taskbar: React.FC<{}> = () => {
    return (
        <div className='start-bar'>
            <StartButton/>
        </div>
    );
}

export default Taskbar;