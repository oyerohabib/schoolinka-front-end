const TodoComponent = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 border rounded-lg bg-secondary mb-4">
      {/* First section */}
      <div className="flex items-center space-x-4">
        {/* Checkbox */}
        <input type="checkbox" className="h-6 w-6" />

        {/* Title and Time Range (Vertically Stacked) */}
        <div>
          <div className="font-medium">TODO Title</div>
          <div className="text-gray-500">9:00 AM - 11:00 AM</div>
        </div>
      </div>

      {/* Second section */}
      <div>
        {/* Day Created */}
        <div className="text-gray-500">Created: Monday</div>
      </div>
    </div>
  );
};

export default TodoComponent;
