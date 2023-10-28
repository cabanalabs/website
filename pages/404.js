import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 30000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Cabana Labs - not found</title>
        <meta property="og:title" content="Cabana Labs - not found" key="title" />
        <meta name="description" content="Cabana Labs - not found" key="description" />
      </Head>

      <section className="section">
        <div className=" min-h-[400px] flex flex-col gap-6 items-center justify-center">
          <h1 className="text-xl md:text-3xl font-bold">404 - Page Not Found</h1>
          <p className="text-base md:text-xl font-medium text-corduroy">
            You will be redirected to{" "}
            <span className="text-cabanaBlue font-medium">
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
