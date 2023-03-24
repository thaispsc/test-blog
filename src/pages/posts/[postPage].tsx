import Posts from "@/blog/pages/Posts";
import { getPosts } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { postPage?: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (!params.postPage || params.postPage > 20) {
    return {
      props: {
        error: new Error("invalid params: missing post page"),
        post: null,
      },
    };
  }

  const { postPage } = params;
  try {
    const posts = await getPosts(postPage, 5);
    return {
      props: {
        error: null,
        postPage,
        posts,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        postPage: null,
        posts: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  posts: Post[] | null;
  postPage: string;
};

export default function Page({ error, posts, postPage }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {posts && <Posts posts={posts} page={postPage} />}
    </>
  );
}
