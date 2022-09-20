import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';
import '../styles/satoshi.css';

import { PageLayout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <NextNProgress
        color='#007CC2'
        startPosition={0.3}
        stopDelayMs={300}
        height={3}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
