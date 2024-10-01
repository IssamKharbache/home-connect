import { Avatar, Menu } from "@mantine/core";
const ProfileMenu = ({ logout, user }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar alt={"user avatar"} radius="xl" src={user?.picture} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favorites</Menu.Item>
        <Menu.Item>Visits Booked</Menu.Item>
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
