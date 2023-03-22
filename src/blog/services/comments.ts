import { api } from "./config";

export const getCommentsByPostId = async (postId: number) => {
  try {
    const { data } = await api.get(`/posts/${postId}/comments`);
    return data;
  } catch (error) {
    const err = new Error("Failed to get comments");
    throw err;
  }
};
