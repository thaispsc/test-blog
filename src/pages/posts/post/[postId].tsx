import Post from "@/blog/pages/Post";
import { getPostById } from "@/blog/services/posts";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { postId: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (isNaN(params.postId)) {
    return {
      props: {
        errorMessage: "Invalid params: missing valid post id!",
        post: null,
      },
    };
  }

  const { postId } = params;

  try {
    const post = await getPostById(postId);
    return {
      props: {
        errorMessage: null,
        post,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        errorMessage: error.message,
        post: null,
      },
    };
  }
};

type PageProps = {
  errorMessage: string | null;
  post: Post | null;
};

export default function Page({ errorMessage, post }: PageProps) {
  return (
    <>
      {errorMessage && <NextError message={errorMessage} />}
      {post && <Post post={post} />}
    </>
  );
}
