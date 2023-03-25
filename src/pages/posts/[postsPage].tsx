import Posts from "@/blog/pages/Posts";
import { getPosts } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { postsPage: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (isNaN(params.postsPage) || params.postsPage > 20) {
    return {
      props: {
        errorMessage: "Invalid params: missing valid posts page!",
        post: null,
      },
    };
  }

  const { postsPage } = params;
  try {
    const posts = await getPosts(postsPage, 5);
    return {
      props: {
        errorMessage: null,
        postsPage,
        posts,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        errorMessage: error.message,
        postsPage: null,
        posts: null,
      },
    };
  }
};

type PageProps = {
  errorMessage: string | null;
  posts: Post[] | null;
  postsPage: string;
};

export default function Page({ errorMessage, posts, postsPage }: PageProps) {
  return (
    <>
      {errorMessage && <NextError message={errorMessage} />}
      {posts && <Posts posts={posts} page={postsPage} />}
    </>
  );
}
