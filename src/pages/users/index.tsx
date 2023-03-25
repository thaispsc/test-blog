import Users from "@/blog/pages/Users";
import { getUsers } from "@/blog/services/users";
import NextError from "@/lib/components/Error";

export const getServerSideProps = async () => {
  try {
    const users = await getUsers();
    return {
      props: {
        errorMessage: null,
        users,
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      props: {
        errorMessage: error.message,
        users: null,
      },
    };
  }
};

type PageProps = {
  errorMessage: string | null;
  users: User[] | null;
};

export default function Page({ errorMessage, users }: PageProps) {
  return (
    <>
      {errorMessage && <NextError message={errorMessage} />}
      {users && <Users users={users} />}
    </>
  );
}
