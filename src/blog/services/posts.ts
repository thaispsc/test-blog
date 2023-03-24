import { api } from "./config";

export const getPosts = async () => {
  try {
    const { data } = await api.get("/posts?_embed=comments");
    return data;
  } catch (error) {
    const err = new Error("Failed to get posts list");
    throw err;
  }
};

export const getPostById = async (id: number) => {
  try {
    const { data } = await api.get(`/posts/${id}?_embed=comments`);
    return data;
  } catch (error) {
    const err = new Error("Failed to get post");
    throw err;
  }
};
