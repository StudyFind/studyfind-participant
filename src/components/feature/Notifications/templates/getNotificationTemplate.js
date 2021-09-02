import createAccount from "./createAccount";
import updateAccount from "./updateAccount";

import createStudy from "./createStudy";
import updateStudy from "./updateStudy";
import deleteStudy from "./deleteStudy";

import participantEnrolled from "./participantEnrolled";
import participantStatusChanged from "./participantStatusChanged";

import createMeeting from "./createMeeting";
import updateMeeting from "./updateMeeting";
import deleteMeeting from "./deleteMeeting";

import createReminder from "./createReminder";
import updateReminder from "./updateReminder";
import deleteReminder from "./deleteReminder";

import confirmMeeting from "./confirmMeeting";
import confirmReminder from "./confirmReminder";

import defaultTemplate from "./defaultTemplate";

const getNotificationTemplate = ({ code, side, meta }) => {
  switch (code) {
    case "CREATE_ACCOUNT":
      return createAccount({ side, meta });
    case "UPDATE_ACCOUNT":
      return updateAccount({ side, meta });
    case "CREATE_STUDY":
      return createStudy({ side, meta });
    case "UPDATE_STUDY":
      return updateStudy({ side, meta });
    case "DELETE_STUDY":
      return deleteStudy({ side, meta });
    case "PARTICIPANT_ENROLLED":
      return participantEnrolled({ side, meta });
    case "PARTICIPANT_STATUS_CHANGED":
      return participantStatusChanged({ side, meta });
    case "CREATE_MEETING":
      return createMeeting({ side, meta });
    case "UPDATE_MEETING":
      return updateMeeting({ side, meta });
    case "DELETE_MEETING":
      return deleteMeeting({ side, meta });
    case "CREATE_REMINDER":
      return createReminder({ side, meta });
    case "UPDATE_REMINDER":
      return updateReminder({ side, meta });
    case "DELETE_REMINDER":
      return deleteReminder({ side, meta });
    case "CONFIRM_MEETING":
      return confirmMeeting({ side, meta });
    case "CONFIRM_REMINDER":
      return confirmReminder({ side, meta });
    default:
      return defaultTemplate({ side, meta });
  }
};

export default getNotificationTemplate;
