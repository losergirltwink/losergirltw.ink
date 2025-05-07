import type React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/error/Error';
import App from './App';

interface AppRoutingProps {
    props?: any;
}

const AppRouting: React.FC<AppRoutingProps> = ({ props }) => {
    if(props.error) {
        <ErrorPage errorMessage={'fake error message'}/>
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
            </Routes> 
        </BrowserRouter>
    );
};

export default AppRouting;