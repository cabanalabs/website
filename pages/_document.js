import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> <Head/> {/*<body className="light:bg-white dark:bg-woodSmoke">*/}
      <body className="bg-woodSmoke text-white">
      <Main/> <NextScript/>
      </body>
    </Html>
  );
}
