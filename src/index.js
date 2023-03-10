import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { NavigationProvider } from './context/navigation';
import { HashRouter } from 'react-router-dom';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<NavigationProvider>
    <HashRouter>
<App />
</HashRouter>
</NavigationProvider>
);
