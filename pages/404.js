import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import pypLogo from "../public/icons/pbyp-symbol.svg";

const Error = () => {
  return (
    <>
      <Head>
        <title>404 - Powered by Pen</title>
      </Head>
      <main className="center-item text-center fixed w-full h-full">
        <section>
          <Link href="/">
            <a className="logo-404">
              <Image
                src={pypLogo}
                width={50}
                height={128}
                alt={`Poweredbypen Instagram Page`}
              />
            </a>
          </Link>
          <h1 className="text-3xl font-medium mt-10 mb-2">Apologies</h1>
          <p className="text-xl font-light text-gray-400">
            The page you are looking for does not exist.
            <br />
            It may have been moved, or removed altogether.
            <br />
            You may return to the{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Error;
