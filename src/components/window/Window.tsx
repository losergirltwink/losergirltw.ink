import React from 'react';
import './Window.css';
import { Rnd } from 'react-rnd';

const Window: React.FC<{}> = () => {
    const [width, setWidth] = React.useState(640);
    const [height, setHeight] = React.useState(480);
    const rndRef = React.useRef(null);
    
    const updateSize = () => {
        if(rndRef.current) {
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            setWidth(containerWidth*0.5);
            setHeight(containerHeight*0.75);
        }
    };

    React.useEffect(() => {
        updateSize();

        const handleResize = () => {
            updateSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);
    

    return (
        <Rnd
            default={{x:width,y:height,width:0,height:0}} // initial position (size does not matter)
            className='window'
            ref={rndRef}
            size={{ width , height }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setWidth(ref.offsetWidth);
                setHeight(ref.offsetHeight);
            }}
        >
            <div className='header'>
                <span className='header-item'>icon</span> {/* will be img */}
                <span className='header-item'>window name</span> 
                <span className='header-controls'>
                    <button className='window-control'>—</button>
                    <button className='window-control'>☐</button>
                    <button className='window-control'>❌</button>
                </span>
            </div>
            <div className='body'>
                <p>body content</p>
            </div>
        </Rnd>
    );
}

export default Window;