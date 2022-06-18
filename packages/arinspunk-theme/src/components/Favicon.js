import { Head, connect } from "frontity";
import android from "../../static/img/android-chrome-192x192.png";
import androidBig from "../../static/img/android-chrome-512x512.png";
import apple from "../../static/img/apple-touch-icon.png";
import favicon16 from "../../static/img/favicon-16x16.png";
import favicon32 from "../../static/img/favicon-32x32.png";
//import webmanifest from "../../static/img/site.webmanifest"; 

const Favicon = ({ state }) => {
  return (
    <Head>
        <link rel="icon" type="image/png" sizes="192x192"  href={android} />
        <link rel="icon" type="image/png" sizes="512x512" href={androidBig} />
        <link rel="apple-touch-icon" sizes="180x180" href={apple} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon32} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon16} />
        {/* <link rel="manifest" href={webmanifest} /> */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default connect(Favicon);
