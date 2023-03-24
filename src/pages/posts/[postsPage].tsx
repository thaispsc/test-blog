import Posts from "@/blog/pages/Posts";
import { getPosts } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { postsPage?: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (!params.postsPage || params.postsPage > 20) {
    return {
      props: {
        error: new Error("invalid params: missing post page"),
        post: null,
      },
    };
  }

  const { postsPage } = params;
  try {
    const posts = await getPosts(postsPage, 5);
    return {
      props: {
        error: null,
        postsPage,
        posts,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        postsPage: null,
        posts: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  posts: Post[] | null;
  postsPage: string;
};

export default function Page({ error, posts, postsPage }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {posts && <Posts posts={posts} page={postsPage} />}
    </>
  );
}
