import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Bebas_Neue } from "@next/font/google";
import { Unica_One } from "@next/font/google";
import localFont from "next/font/local";
import local from "next/font/local";
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

const unica_one = Unica_One({
  subsets: ["latin"],
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
