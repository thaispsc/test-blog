import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Posts() {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts/1");
  }, []);
  return null;
}
