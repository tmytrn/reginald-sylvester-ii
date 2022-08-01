import "../styles/globals.css";
import "../styles/fonts.css";
import React, { useState, useEffect } from "react";
import MyLayout from "components/Layout";

function MyApp({ Component, pageProps }) {
  // console.log("pageProps.page ", pageProps);
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
