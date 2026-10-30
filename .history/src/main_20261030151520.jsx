import Router from './router/Router.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Router />
    <ToastContainer position="top-right" autoClose={3000} />
  </BrowserRouter>
)
