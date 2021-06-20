const LONG = 5000;
const SHORT = 2500;

const connectionError = {
  title: "Connection Error!",
  description: `Your action could not be completed because of a connection error. Please try again later.`,
  status: "error",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const updatedAccount = {
  title: "Your profile information was successfully updated!",
  status: "success",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const deletedAccount = {
  title: "Account Deleted",
  description: "Your account has been deleted along with all your user data and research studies.",
  status: "success",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const changedPassword = {
  title: "Password Changed!",
  description: "You can now use your new password to log in",
  status: "success",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const providedFeedback = {
  title: "Thank you for your feedback!",
  description: `Your feedback was successfully sent and we will be reviewing it carefully. Thank you for taking the time to help make StudyFind work better :)`,
  status: "info",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const publishedStudy = {
  title: "Study Published!",
  description: `Your study was successfully published is now available for participants to view and enroll.`,
  status: "success",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const deletedStudy = {
  title: "Study Deleted!",
  description: `Your study was successfully deleted and will no longer be accessible through StudyFind`,
  status: "success",
  duration: LONG,
  isClosable: true,
  position: "top",
};

const savedStudy = {
  title: "Study Progress Saved!",
  description: `Your study along with any changes you made have been saved and can be published or deleted from the study settings tab.`,
  status: "info",
  duration: 5000,
  isClosable: true,
  position: "top",
};

const removedStudy = {
  title: "Study Removed",
  description: `This study has been removed from your StudyFind account. If this was a mistake you may re-create the study using its NCT ID from your dashboard.`,
  status: "info",
  duration: SHORT,
  isClosable: true,
  position: "top",
};

const deletedReminder = {
  title: "Reminder Deleted",
  description: `This reminder has been successfully deleted and the respective participant has been notified`,
  status: "success",
  duration: SHORT,
  isClosable: true,
  position: "top",
};

const deletedMeeting = {
  title: "Meeting Deleted",
  description: `This meeting has been successfully deleted and the respective participant has been notified`,
  status: "success",
  duration: SHORT,
  isClosable: true,
  position: "top",
};

const deletedNote = {
  title: "Note Deleted",
  description: "This private participant note has been successfully deleted",
  status: "success",
  duration: SHORT,
  isClosable: true,
  position: "top",
};

export default {
  connectionError, // generic error toast
  updatedAccount, // account page - everything except security tab
  deletedAccount, // account page - only security tab
  changedPassword, // account page - only security tab
  providedFeedback, // feedback page
  publishedStudy, // create study page - review step
  deletedStudy, // create study page - review step && view study page - settings tab
  savedStudy, // create study page - review step
  removedStudy, // welcome account page

  deletedReminder,
  deletedMeeting,
  deletedNote,
};
