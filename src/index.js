/* React Importation */
import React from 'react';
import { createRoot } from 'react-dom/client';

/* ReactRoute Importation*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Redux Importation */
import { store } from './redux/store'
import { Provider } from 'react-redux'

/* App from Firebase */
import { appFire } from './firebase/initializeFireBase'

/* CSS Importation */
import './css/index.css'

/* Components Importation */
import App from './components/App'
import AuthForm from './components/AuthForm';
import MainWall from './components/mainWall/MainWall';


if( appFire ){}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    //<React.StrictMode>
        <Provider store={store} >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <MainWall /> } ></Route>
                    <Route path='/auth' element={ <AuthForm /> } ></Route>
                </Routes>
            </BrowserRouter>  
        </Provider>
    //</React.StrictMode>
)