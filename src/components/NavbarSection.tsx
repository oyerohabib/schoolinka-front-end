import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const NavbarSection = () => {
  return (
    <>
      <Navbar className="mx-auto  px-4 py-3 shadow-none">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography variant="h3" className="mr-4 ml-2 cursor-pointer py-1.5">
            ToDo
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="blue-gray">
              <Cog6ToothIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <BellIcon className="h-5 w-5" />
            </IconButton>
            <IconButton variant="text" color="blue-gray">
              <UserCircleIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </Navbar>

      <hr />
    </>
  );
};

export default NavbarSection;
