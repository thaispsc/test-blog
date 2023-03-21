import { api } from "./config";

export const getPosts = async () => {
  try {
    const { data } = await api.get("/posts");
    return data;
  } catch (error) {
    const err = new Error("Failed to get posts list");
    throw err;
  }
};
