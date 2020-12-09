function formatDate(value) {
  const date = new Date(value);
  const year = parseInt(date.getYear()) + 1900;
  const month = parseInt(date.getMonth());
  const day = date.getDate();

  const MONTHS = [
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

  return `${MONTHS[month]} ${day}, ${year}`;
}

export default { date: formatDate };
