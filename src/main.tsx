import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProSidebarProvider } from 'react-pro-sidebar'
import App from './App'
import { UserProvider } from './context/UserProvider'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <UserProvider>
      <App />
      </UserProvider>
</ProSidebarProvider>
  </React.StrictMode>,
)
