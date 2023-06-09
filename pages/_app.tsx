import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Bebas_Neue } from "@next/font/google";
import { Unica_One } from "@next/font/google";

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

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div
      className={`${bebas_neue.variable} ${unica_one.variable}
       font-bebas-neue `}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
