import Head from "next/head";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Zippia Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar>
          <h1>Zippia Jobs</h1>
        </Navbar>
      </header>

      <main>{children}</main>
      <Footer>
        <>Victor Barbosa @2023</>
      </Footer>
    </>
  );
};
