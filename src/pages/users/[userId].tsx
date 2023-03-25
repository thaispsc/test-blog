import User from "@/blog/pages/User";
import { getUserById } from "@/blog/services/users";
import NextError from "@/lib/components/Error";

interface ServerSideProps {
  params: { userId: number };
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (isNaN(params.userId)) {
    return {
      props: {
        errorMessage: "Invalid params: missing valid user id!",
        user: null,
      },
    };
  }

  const { userId } = params;

  try {
    const user = await getUserById(userId);
    return {
      props: {
        errorMessage: null,
        user,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        errorMessage: error.message,
        user: null,
      },
    };
  }
};

type PageProps = {
  errorMessage: string | null;
  user: User | null;
};

export default function Page({ errorMessage, user }: PageProps) {
  return (
    <>
      {errorMessage && <NextError message={errorMessage} />}
      {user && <User user={user} />}
    </>
  );
}
