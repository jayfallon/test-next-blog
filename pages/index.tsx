import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Link from "next/link";

const title: string = "Nextjs something";
const Container = styled.div``;
const Main = styled.main``;
const BlogTitle = styled.h1``;
const List = styled.ul`
  list-style: square;
`;
const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const LoadPosts = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({ posts });
  return (
    <List>
      {posts.map((post) => {
        return (
          <ListItem key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>
                <PostTitle>{post.title}</PostTitle>
              </a>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={styles.main}>
        <BlogTitle className={styles.title}>
          Welcome to <a href="https://nextjs.org">{title}</a>
          <div>{LoadPosts({ posts })}</div>
        </BlogTitle>
      </Main>
    </Container>
  );
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
