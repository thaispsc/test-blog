import { api } from "./config";

export const getUsers = async () => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    const err = new Error("Failed to get users list");
    throw err;
  }
};
