import type React from 'react';
import './Window.css';

const Window: React.FC<{}> = () => {
    return (
        <div className='window'>
            <div className='header'>
                <span className='header-text'>Windows</span>
                <span className='header-controls'>x</span>
            </div>
        </div>
    );
}

export default Window;