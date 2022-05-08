import { server } from "../config";
import styles from "../styles/Home.module.css";

import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await result.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
