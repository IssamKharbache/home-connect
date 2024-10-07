import Website from "./pages/Website";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import Layout from "./components/Layout";
import PropertiesPage from "./pages/properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "sonner";
import SingleProperty from "./pages/single-property/SingleProperty";
import UserDetailContext from "./context/UserDetailContext";
import BookingsPage from "./pages/bookings/Bookings";
import FavouritesPage from "./pages/favourites/Favourites";
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<PropertiesPage />} />
                  <Route path=":propertyId" element={<SingleProperty />} />
                </Route>
                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
