import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransactionProvider } from './context/EnergyContext.jsx'
import { BuyTransactionProvider } from './context/BuyContext.jsx'
import { NodeProvider } from './context/NodeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BuyTransactionProvider>
    <NodeProvider>
  <TransactionProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>

  </TransactionProvider>
  </NodeProvider>
  </BuyTransactionProvider>
)
