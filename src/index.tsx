import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = "1023220055718-kv73cr96prpdup1023f338j8q96j5fds.apps.googleusercontent.com";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
