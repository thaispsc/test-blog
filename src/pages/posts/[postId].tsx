import Post from "@/blog/pages/Post";
import { getCommentsByPostId } from "@/blog/services/comments";
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
        comments: null,
      },
    };
  }

  const { postId } = params;

  try {
    const post = await getPostById(postId);
    const comments = await getCommentsByPostId(postId);
    return {
      props: {
        error: null,
        post,
        comments,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        post: null,
        comments: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  post: Post | null;
  comments: Comment[] | null;
};

export default function Page({ error, post, comments }: PageProps) {
  const commentsArray = comments || [];
  return (
    <>
      {error && <NextError message={error.message} />}
      {post && <Post post={post} comments={commentsArray} />}
    </>
  );
}
