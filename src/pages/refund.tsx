import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';
import { RefundPolicy } from '../legal/RefundPolicy';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RefundPolicy />
  </StrictMode>,
);
