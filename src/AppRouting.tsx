import type React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorPage from './components/error/Error';

interface AppRoutingProps {
    props?: any;
}

const AppRouting: React.FC<AppRoutingProps> = ({ props }) => {
    if(props.error) {
        <ErrorPage errorMessage={'fake error message'}/>
    }
    return (
        <BrowserRouter>
            <Route></Route>
        </BrowserRouter>
    );
};

export default AppRouting;