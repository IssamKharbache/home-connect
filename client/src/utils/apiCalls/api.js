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

//book visit function

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/book-visit/${propertyId}`,
      { email, id: propertyId, date: dayjs(date).format("DD/MM/YYYY") },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    throw error;
  }
};

//cancel a booking function
export const cancelBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/cancel-booking/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

//handle favorite

export const makeFavorite = async (id, email, token) => {
  try {
    await api.post(
      `/user/make-favorite/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

// get all favourites
export const getAllFavoutites = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/favorite-properties`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favPropertiesID"];
  } catch (error) {
    throw error;
  }
};

// get all bookings
export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/booked-visits`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];
  } catch (error) {
    throw error;
  }
};

// create property function
export const createProperty = async (data, token) => {
  try {
    const res = await api.post(
      `/property/create`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
