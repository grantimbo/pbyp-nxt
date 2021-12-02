// pages/_app.js
import "../styles/global.css";
import UserContextComponent from "../support/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextComponent>
      <Component {...pageProps} />
    </UserContextComponent>
  );
}

export default MyApp;
