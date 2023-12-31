import '@/styles/globals.scss'
import '@/styles/main.scss';
import type { AppProps } from 'next/app'
import { ApplicationLayout } from '@/layouts/ApplicationLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ApplicationLayout>
        <Component {...pageProps} />
      </ApplicationLayout>
  );
};
