import "../styles/globals.css";
import { Footer, NavBar } from "@/components/componentIndex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;