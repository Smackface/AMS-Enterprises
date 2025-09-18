import "@/styles/globals.css";
import "@/styles/client-portal.scss";
import type { AppProps } from "next/app";
import { Amplify } from 'aws-amplify';
import { useEffect } from 'react';
import outputs from '../../amplify_outputs.json';
import { registerServiceWorker } from '@/utils/pwa';

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker for PWA
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  }, []);

  return <Component {...pageProps} />;
}
