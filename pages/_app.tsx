import { AppProps } from "next/app";
import "./global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
