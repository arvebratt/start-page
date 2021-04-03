import Head from "next/head";
import useTimeDate from "./useTimeDate";

const Meta = ({ title, keywords, description }) => {
  const phrase = useTimeDate();
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{phrase.wish}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Arvebratt",
  keywords: "startpage, start, clouds, home",
  description: "Alexander Arvebratt start page",
};

export default Meta;
