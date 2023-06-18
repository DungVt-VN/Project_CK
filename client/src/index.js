import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { AuthProvider } from './contex/AuthProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
);
