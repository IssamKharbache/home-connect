import React, { useContext, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../utils/apiCalls/api";

const Layout = () => {
  const { isAuthenticated, user } = useAuth0();

  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: async () => createUser(user?.email),
  });
  useEffect(() => {
    isAuthenticated && mutate();
  }, [isAuthenticated]);
  return (
    <>
      <div style={{ backgroundColor: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
