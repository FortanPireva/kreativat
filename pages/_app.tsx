import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import local from "next/font/local";
const bebas_neue = localFont({
  src: "./fonts/BebasNeue.otf",
  variable: "--font-bebas-neue",
});

const unica_one = localFont({
  src: "./fonts/UnicaOne-Regular.ttf",

  variable: "--font-unica-one",
  weight: "400",
});

const air_bnb = localFont({
  src: "./fonts/AirbnbCereal_W_Bk.otf",
  variable: "--font-airbnb",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div
      className={`${bebas_neue.variable} ${unica_one.variable} ${air_bnb.variable}
       font-bebas-neue `}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
