import User from "@/blog/pages/User";
import { getUserById } from "@/blog/services/users";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { userId?: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (!params.userId) {
    return {
      props: {
        error: new Error("invalid params: missing user id"),
        user: null,
      },
    };
  }

  const { userId } = params;

  try {
    const user = await getUserById(userId);
    return {
      props: {
        error: null,
        user,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        user: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  user: User | null;
};

export default function Page({ error, user }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {user && <User user={user} />}
    </>
  );
}
