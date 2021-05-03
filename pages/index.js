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
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //const articles = await res.json(); 
  const articles = [
  {id: 1, title:'Padova', img: "https://images.unsplash.com/photo-1588447824384-2b5b65080fd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFkb3ZhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
  {id: 2, title:'Valencia', img: 'https://images.unsplash.com/photo-1544180447-45e0c7167b48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmFsZW5jaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}, 
  {id: 3, title:"Barcelona",img: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyY2Vsb25hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
  {id: 4, title:"Lisbon",img: "https://images.unsplash.com/photo-1611761814105-576c3082c7ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpc2JvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
  {id: 5, title:"Tenerife",img: "https://images.unsplash.com/photo-1545289665-8d3a6a232700?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVuZXJpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
  {id: 6, title:"Bali",img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
  ]

  return {
    props: {
      articles,
    },
  };
};
