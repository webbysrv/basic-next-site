import Meta from "../../../components/Meta";
import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const result = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  // paths: {params: {id: '1', id: '2'}}

  return {
    paths,
    fallback: false,
  };
};

/* 
//method 1
export const getServerSideProps = async (context) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};
*/

//method 2
// export const getStaticProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await result.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await result.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   // paths: {params: {id: '1', id: '2'}}

//   return {
//     paths,
//     fallback: false,
//   };
// };
