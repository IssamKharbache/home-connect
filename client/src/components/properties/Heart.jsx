import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { makeFavorite } from "../../utils/apiCalls/api";
import { checkFavorites, updateFavorites } from "../../utils/common";
const Heart = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const {
    userDetails: { favorites, token },
    setUserDetails,
  } = useContext(UserDetailContext);
  useEffect(() => {
    setHeartColor(() => checkFavorites(id, favorites));
  }, [favorites]);
  const { mutate } = useMutation({
    mutationFn: () => makeFavorite(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favorites: updateFavorites(id, prev.favorites),
      }));
    },
  });
  //handle the like action
  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "white" ? "red" : "white"));
    }
  };

  return (
    <AiFillHeart
      size={24}
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
};

export default Heart;
