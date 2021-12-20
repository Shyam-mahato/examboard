import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Component {...pageProps} />
      <footer style={{textAlign:"center"}}>Examination CopyRightⒸ2021</footer>

    </>
  );
};

export default MyApp; 