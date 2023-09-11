interface DateComponentProps {
  date: number;
}

const DateComponent = ({ date }: DateComponentProps) => {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayIndex = (date - 1) % 7;
  return (
    <div className="bg-white rounded-md px-4 py-2 text-center border">
      <div className="text-md">{dayNames[dayIndex]}</div>
      <div className="mt-2 text-sm">{date}</div>
    </div>
  );
};

export default DateComponent;
