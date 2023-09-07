import { Typography, IconButton } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="mx-auto w-full flex justify-between items-center py-4">
      <div className="flex flex-col p-4">
        <Typography variant="h3">Good morning!</Typography>
        <span className="text-md text-gray-600">You got some task to do.</span>
      </div>

      <div className="p-4">
        <button className="bg-primary text-white font-semibold py-1 px-3 rounded-md">
          <IconButton variant="text" color="white">
            <PlusIcon className="h-5 w-5" />
          </IconButton>
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default Header;
