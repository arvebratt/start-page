import Layout from "../components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link rel="icon" href="../public/favicon.ico" />
        <link href="/static/styles.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout />
    </div>
  );
};

export default Home;
