import Head from "next/head";
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://raw.githubusercontent.com/JacopoContin/coolspots/main/.mockend.json");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
