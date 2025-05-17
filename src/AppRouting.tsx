import type React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/pages/error/Error';
import App from './App';

const AppRouting: React.FC<{}> = () => {
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
