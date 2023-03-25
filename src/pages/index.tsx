import Blog from "@/blog/pages/Blog";
import { getPosts } from "@/blog/services/posts";
import { getUsers } from "@/blog/services/users";
import NextError from "@/lib/components/Error";

export const getServerSideProps = async () => {
  try {
    const posts = await getPosts();
    const users = await getUsers();
    return {
      props: {
        errorMessage: null,
        posts,
        users,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        errorMessage: error.message,
        posts: null,
        users: null,
      },
    };
  }
};

type PageProps = {
  errorMessage: string | null;
  posts: Post[] | null;
  users: User[] | null;
};

export default function Home({ errorMessage, posts, users }: PageProps) {
  return (
    <>
      {errorMessage && <NextError message={errorMessage} />}
      {posts && users && <Blog posts={posts} users={users} />}
    </>
  );
}
