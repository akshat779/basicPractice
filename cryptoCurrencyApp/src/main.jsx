import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'antd/dist/reset.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
)
