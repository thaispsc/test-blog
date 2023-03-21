import Blog from "@/blog/pages/Blog";
import { getPosts } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

export const getServerSideProps = async () => {
  try {
    const posts = await getPosts();
    return {
      props: {
        error: null,
        posts,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        posts: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  posts: Post[] | null;
};

export default function Home({ error, posts }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {posts && <Blog posts={posts} />}
    </>
  );
}
