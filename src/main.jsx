import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './components';
import { router } from './router/router';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <GlobalStyles>
                <RouterProvider router={router} />
            </GlobalStyles>
        </ContextProvider>
    </React.StrictMode>,
);
