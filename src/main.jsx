import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <Table />
  </StrictMode>
);
  

