import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import Main from "./components/MainPage/Main.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
