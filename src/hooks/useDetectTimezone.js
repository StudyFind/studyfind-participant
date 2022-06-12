import moment from "moment-timezone";

function useDetectTimezone() {
  return moment.tz.guess(true);
}

export default useDetectTimezone;
