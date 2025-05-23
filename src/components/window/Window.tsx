import React from 'react';
import { Rnd } from 'react-rnd';
import '98.css';
import CloseButton from './button/CloseButton';
import MinimizeButton from './button/MinimizeButton';
import MaximizeButton from './button/MaximizeButton';
import ErrorPage from '../pages/error/Error';
// import './Window.css';

interface WindowProps {
    windowName: string;
    windowContent: string;
}

const Window: React.FC<WindowProps> = ({ windowName,windowContent }) => {
    const [width, setWidth] = React.useState(640);
    const [height, setHeight] = React.useState(480);
    const rndRef = React.useRef(null);
    
    if(!windowName) {
        return (
            <ErrorPage errorMessage='no name provided to window'/>
        );
    }
    if(!windowContent) {
        return(
            <ErrorPage errorMessage='no content provided to window'/>
        );
    }

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
            onResizeStop={(_e, _direction, ref, _delta, _position) => {
                setWidth(ref.offsetWidth);
                setHeight(ref.offsetHeight);
            }}
            minWidth={300}
            minHeight={150}
        >
            <div className='title-bar'>
                <span className='title-bar-text'>{windowName}</span> 
                <span className='title-bar-controls'>
                    <MinimizeButton/>
                    <MaximizeButton/>
                    <CloseButton/>
                </span>
            </div>
            <div className='body'>
                <p>{windowContent}</p>
            </div>
        </Rnd>
    );
}

export default Window;