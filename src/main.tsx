import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import App from './App';
import { Toaster } from '@/components/alignui/toast';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <TooltipProvider delayDuration={260}>
        <App />
        <Toaster richColors closeButton />
      </TooltipProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
