import moment from "moment";

/*
==============================================================================
Database Formats
------------------------------------------------------------------------------
Always store dates in the database in the format "YYYY-MM-DD"
Always store times in the database as unix timestamps
==============================================================================

==============================================================================
Parameter Formats
------------------------------------------------------------------------------
timestamp => unix timestamp in milliseconds  Example: 1619834416000
timezone => item from moment-timezone list   Example: "America/New_York"
time => 12 hour format with meridian         Example: "9:49pm"
date => YYYY-MM-DD format                    Example: "2021-04-30"
==============================================================================
*/

const getNow = () => {
  return moment().valueOf();
};

const getNowUTC = () => {
  return moment().utc().valueOf();
};

const getToday = () => {
  return moment().format("YYYY-MM-DD");
};

const getYesterday = () => {
  return moment().add(-1, "days").format("YYYY-MM-DD");
};

const getTomorrow = () => {
  return moment().add(1, "days").format("YYYY-MM-DD");
};

const getStandardDate = (timestamp) => {
  return moment(timestamp).format("YYYY-MM-DD");
};

const getFriendlyDate = (timestamp) => {
  const standardDate = getStandardDate(timestamp);

  const today = getToday();
  const tomorrow = getTomorrow();
  const yesterday = getYesterday();

  if (standardDate === today) return "Today";
  if (standardDate === tomorrow) return "Tomorrow";
  if (standardDate === yesterday) return "Yesterday";

  return moment(timestamp).format("MMMM DD, YYYY");
};

const get12HourTime = (timestamp) => {
  return moment(timestamp).format("h:mma");
};

const get24HourTime = (timestamp) => {
  return moment(timestamp).format("HH:mm");
};

const getRelativeTime = (timestamp) => {
  return moment(timestamp).fromNow();
};

const getStandardTimezoneName = (timezone) => {
  return moment.tz(timezone).zoneAbbr();
};

const getTimestampFromDatetime = (time, date) => {
  return moment(`${date} ${time}`).utc().valueOf();
};

export default {
  getNow,
  getNowUTC,
  getToday,
  getYesterday,
  getTomorrow,
  getStandardDate,
  getFriendlyDate,
  get12HourTime,
  get24HourTime,
  getRelativeTime,
  getStandardTimezoneName,
  getTimestampFromDatetime,
};
