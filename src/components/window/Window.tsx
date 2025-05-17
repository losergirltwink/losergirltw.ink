import React from 'react';
// import './Window.css';
import { Rnd } from 'react-rnd';
import '98.css';

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
        <Rnd // React: Resizable and Draggable (https://github.com/bokuweb/react-rnd)
            default={{x:width,y:height,width:0,height:0}} // initial position (size does not matter)
            className='window'
            ref={rndRef}
            size={{ width , height }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setWidth(ref.offsetWidth);
                setHeight(ref.offsetHeight);
            }}
            minWidth={300}
            minHeight={150}
        >
            <div className='title-bar'>
                <span className='title-bar-text'>window name</span> 
                <span className='title-bar-controls'>
                    <button aria-label='Minimize'/>
                    <button aria-label='Maximize'/>
                    <button aria-label='Close'/>
                </span>
            </div>
            <div className='body'>
                <p>doing a little bit of trolling</p>
            </div>
        </Rnd>
    );
}

export default Window;