import Posts from "@/blog/pages/Posts";
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

export default function Page({ error, posts }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {posts && <Posts posts={posts} />}
    </>
  );
}
