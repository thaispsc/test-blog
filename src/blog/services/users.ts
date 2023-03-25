import { api } from "./config";

export const getUsers = async () => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    const err = new Error("Failed to get users list!");
    throw err;
  }
};

export const getUserById = async (userId: number) => {
  try {
    const { data } = await api.get(`/users/${userId}`);
    return data;
  } catch (error) {
    const err = new Error("Failed to get user!");
    throw err;
  }
};
