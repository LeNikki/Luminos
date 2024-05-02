export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const formattedDate = `${monthName} ${day.padStart(2, "0")}, ${year}`;
  return formattedDate;
};
