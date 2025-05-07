import type React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

interface AppRoutingProps {
    props?: any;
}

const AppRouting: React.FC<AppRoutingProps> = ({ props }) => {
    if(props.error) {
        <p>error</p>
    }
    return (
        <BrowserRouter>
            <Route></Route>
        </BrowserRouter>
    );
};

export default AppRouting;