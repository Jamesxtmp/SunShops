/* React Importation */
import React from 'react';
import { createRoot } from 'react-dom/client';

/* ReactRoute Importation*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* App from Firebase */
import { appFire } from './firebase/initializeFireBase'

/* Redux Importation */
import { store } from './redux/store'
import { Provider } from 'react-redux'

/* Components Importation */
import IndexEponent from './components/exponent/IndexExponent'

/* PreRun */
if( appFire ){}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>{/* <React.StrictMode> */}
    <Provider store={store} >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <IndexEponent /> } ></Route>
                {/* <Route path='/auth' element={ <AuthForm /> } ></Route> */}
            </Routes>
        </BrowserRouter>  
    </Provider>
    {/* </React.StrictMode> */}</>
)