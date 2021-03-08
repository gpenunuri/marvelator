import React from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
