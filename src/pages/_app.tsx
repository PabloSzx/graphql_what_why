import { NextPage } from "next";
import { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  return (
    <>
      {pathname !== "/" && (
        <nav>
          <Link href="/" passHref>
            <a>Go back</a>
          </Link>
          <br />
          <br />
        </nav>
      )}
      <Component {...pageProps} />
    </>
  );
};

export default App;
