import React, { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllFavoutites } from "../utils/apiCalls/api";

const useFavourites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user, isAuthenticated } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavorites",
    queryFn: () => getAllFavoutites(user?.email, userDetails?.token),
    onSuccess: (data) => {
      isAuthenticated &&
        setUserDetails((prev) => ({ ...prev, favorites: data }));
    },

    enabled: user !== undefined,
    staleTime: 30000,
  });
  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useFavourites;
