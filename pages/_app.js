import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import { PageLayout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PageLayout>
        <NextNProgress
          color="#007CC2"
          startPosition={0.3}
          stopDelayMs={300}
          height={3}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
