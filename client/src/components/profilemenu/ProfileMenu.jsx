import { Avatar, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const ProfileMenu = ({ logout, user }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <Avatar alt={"user avatar"} radius="xl" src={user?.picture} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
          My Favourites
        </Menu.Item>
        <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
          Visits Booked
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
