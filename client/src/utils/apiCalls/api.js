import axios from "axios";
import dayjs from "dayjs";
import { toast } from "sonner";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// get all properties function
export const getAllProperties = async () => {
  try {
    const res = await api.get("/property/all-Properties", {
      timeout: 10 * 1000,
    });
    if (res.status === 400 || res.status === 500) {
      throw res.data;
    }
    return res.data;
  } catch (error) {
    toast.error("Something went wrong !");
    throw error;
  }
};

// get specific property function
export const getSpecificProperty = async (id) => {
  try {
    const res = await api.get(`/property/${id}`, {
      timeout: 10 * 1000,
    });
    if (res.status === 400 || res.status === 500) {
      throw res.data;
    }
    return res.data;
  } catch (error) {
    toast.error("Something went wrong !");
    throw error;
  }
};

//create user function
export const createUser = async (email, token) => {
  try {
    await api.post(
      "/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again !");
    throw error;
  }
};
