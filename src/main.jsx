import React from 'react'
import CustomCursor from './components/CustomCursor.jsx';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CustomCursor />
  </React.StrictMode>,
)
