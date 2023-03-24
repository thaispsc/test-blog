import Post from "@/blog/pages/Post";
import { getPostById } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { postId?: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (!params.postId) {
    return {
      props: {
        error: new Error("invalid params: missing post id"),
        post: null,
      },
    };
  }

  const { postId } = params;

  try {
    const post = await getPostById(postId);
    return {
      props: {
        error: null,
        post,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        post: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  post: Post | null;
};

export default function Page({ error, post }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {post && <Post post={post} />}
    </>
  );
}
