import type React from 'react';
import './Window.css';
import { Rnd } from 'react-rnd';

const Window: React.FC<{}> = () => {
    return (
        <Rnd className='window' default={{ x: 0, y: 0, width: 500, height: 500 }} > {/* make x & y determined by viewport */}
            <div className='header'>
                <span className='header-item'>icon</span> {/* will be img */}
                <span className='header-item'>window name</span> 
                <span className='header-controls'>
                    <button className='window-control'>—</button>
                    <button className='window-control'>☐</button>
                    <button className='window-control'>❌</button>
                </span>
            </div>
            <div>
                <p>test</p>
            </div>
        </Rnd>
    );
}

export default Window;