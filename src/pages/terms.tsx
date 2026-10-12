import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';
import { TermsOfService } from '../legal/TermsOfService';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsOfService />
  </StrictMode>,
);
