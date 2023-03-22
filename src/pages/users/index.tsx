import Users from "@/blog/pages/Users";
import { getUsers } from "@/blog/services/users";
import NextError from "@/lib/components/Error";

export const getServerSideProps = async () => {
  try {
    const users = await getUsers();
    return {
      props: {
        error: null,
        users,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        error,
        users: null,
      },
    };
  }
};

type PageProps = {
  error: Error | null;
  users: User[] | null;
};

export default function Page({ error, users }: PageProps) {
  return (
    <>
      {error && <NextError message={error.message} />}
      {users && <Users users={users} />}
    </>
  );
}
