import React, { useContext, useRef } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../context/AppContext";
import { useReactToPrint } from "react-to-print";

function Layout({ children }) {
  const { theme } = useContext(AppContext);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Head>
        <meta property="og:title" content="Serhii Saviuk | Resume" />
        <meta property="og:site_name" content="Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="serhiisaviuk.com" />
        <meta property="og:description" content="Serhii Saviuk | Resume" />
        <meta property="og:image" content="/img/avatar-prev.png" />
        <meta charset="UTF-8" />
        <title>Serhii Saviuk | Resume</title>
        <link rel="icon" type="image/x-icon" href="/img/avatar.png" />
      </Head>
      <main className={`main ${theme}`} id="main">
        <article className="article" ref={componentRef}>
          <div className="page">
            <Header />
            {children}
          </div>
          <Footer />
          <div className="download">
            <button onClick={handlePrint}>Download PDF</button>
          </div>
        </article>
      </main>
    </>
  );
}

export default Layout;
