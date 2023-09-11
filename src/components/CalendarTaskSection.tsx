import { Typography } from "@material-tailwind/react";
import DateComponent from "./Date";
import TodoComponent from "./Todo";
import { CircularPagination } from "./Pagination";

const CalendarTaskSection = () => {
  return (
    <div className="flex flex-col md:flex-row pb-12">
      <div className="md:flex-8 p-4 w-full border-r-4 border-green-900">
        <div className="mb-4">
          <Typography variant="h6" className="mb-4">
            January 2023
          </Typography>
          <div className="flex flex-row gap-2 flex-wrap mb-6">
            {Array.from({ length: 30 }).map((_, index) => (
              <DateComponent key={index} date={(index % 7) + 1} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">My Tasks</h3>
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <TodoComponent />
            ))}
          </div>
          <CircularPagination />
        </div>
      </div>
      <div className="md:flex-2 p-4">
        <h2 className="text-xl font-semibold">Second Section</h2>
        <p>Content for the second section</p>
      </div>
    </div>
  );
};

export default CalendarTaskSection;
