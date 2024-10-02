import { useMutation, useQuery } from "react-query";
import "./single-property.css";
import { useLocation } from "react-router-dom";
import { cancelBooking, getSpecificProperty } from "../../utils/apiCalls/api";
import Loading from "../../components/loading/Loading";
//icons
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Map from "../../components/map/Map";
import { useContext, useState } from "react";
import useAuthCheck from "../../hooks/useAuthCheck";
import BookingModal from "../../components/modals/BookingModal";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { Button } from "@mantine/core";
import { toast } from "sonner";
import Heart from "../../components/properties/Heart";

const SingleProperty = () => {
  //getting the property id from the pathname
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  //use query to get a single property
  const { data, isLoading, isError } = useQuery(["singleProperty", id], () =>
    getSpecificProperty(id)
  );
  //getting the user details
  const { user } = useAuth0();
  //modal state
  const [modalOpen, setModalOpen] = useState(false);
  //auth check hook
  const { validateLogin } = useAuthCheck();
  //get the context user details
  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  //cancel booking mutation

  const { mutate: removeBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => cancelBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking.id !== id),
      }));
      toast.success("Your visit is cancelled successfully");
    },
    onError: () => toast.error("Something went wrong, please try again"),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    <div className="wrapper">
      <div className="flexCenter paddings">
        <span>Error while fetching single property</span>
      </div>
    </div>;
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart id={id} />
        </div>
        {/* image */}
        <img src={data?.image} alt={data?.title} />
        {/* details */}
        <div className="flexCenter property-details">
          {/* left  */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span
                className="orangeText"
                style={{ fontSize: "1.5rem", color: "green" }}
              >
                ${data?.price}
              </span>
            </div>
            {/* facilities details */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.bathrooms == 1
                    ? `${data?.facilities?.parking} Bathroom`
                    : `${data?.facilities?.parking} Bathrooms`}{" "}
                </span>
              </div>
              {/* garages */}
              <div className="flexStart facility">
                <GiHomeGarage size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.parking == 1
                    ? `${data?.facilities?.parking} Garage`
                    : `${data?.facilities?.parking} Garages`}
                </span>
              </div>
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaBed size={20} color="#1F3E72" />
                {data?.facilities?.bedrooms == 1
                  ? `${data?.facilities?.bedrooms} Bedroom`
                  : `${data?.facilities?.bedrooms} Bedrooms`}
              </div>
            </div>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} color="#1F3E72" />
              <span
                className="secondaryText"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {data?.address}, {data?.city}, {data?.country}
              </span>
            </div>
            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  disabled={cancelling}
                  onClick={() => removeBooking()}
                  color="red"
                  w="100%"
                  variant="outline"
                >
                  Cancel booking
                </Button>
                <span>
                  Your visit is booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                onClick={() => {
                  validateLogin() && setModalOpen(true);
                }}
                className="button"
              >
                Book a visit
              </button>
            )}
            {/* MODAL */}
            <BookingModal
              opened={modalOpen}
              setOpened={setModalOpen}
              propertyId={id}
              email={user?.email}
            />
          </div>
          {/* right */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
