import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/globals.css';
import { PrivacyPolicy } from '../legal/PrivacyPolicy';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>,
);
