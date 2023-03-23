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
        error: null,
        posts,
        users,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        posts: null,
        users: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  posts: Post[] | null;
  users: User[] | null;
};

export default function Home({ error, posts, users }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {posts && users && <Blog posts={posts} users={users} />}
    </>
  );
}
