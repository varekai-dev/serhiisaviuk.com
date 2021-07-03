import "../styles/globals.scss";
import Context from "../components/context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;
