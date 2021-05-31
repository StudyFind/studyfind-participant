import {
  FaUser,
  FaUsers,
  FaCalendar,
  FaClipboard,
  FaQuestionCircle,
  FaTimesCircle,
} from "react-icons/fa";

const createAccount = () => ({
  title: "Welcome to StudyFind",
  description:
    "We're glad to have you on board! Click here to fetch your studies from clinicaltrials.gov and add them to your StudyFind account.",
  link: "/welcome",
  color: "green",
  icon: FaUser,
});

const createStudy = ({ studyID }) => ({
  title: "Study Created",
  description: `Your study with study number ${studyID} was successfully created. Click here to check out your new study.`,
  link: `/study/${studyID}/details`,
  color: "green",
  icon: FaClipboard,
});

const deleteStudy = ({ studyID }) => ({
  title: "Study Deleted",
  description: `Your study with study number ${studyID} was successfully deleted. Click here to create a new study.`,
  link: "/create",
  color: "red",
  icon: FaClipboard,
});

const newParticipant = ({ studyID, participantID, participantName }) => ({
  title: "New Study Participant",
  description: `Your study with study number ${studyID} has a new participant ${participantName}. Click here to send them a message.`,
  link: `/study/${studyID}/participants?participantID=${participantID}&action=messages`,
  color: "green",
  icon: FaUsers,
});

const upcomingMeeting = ({ studyID, participantID, participantName }) => ({
  title: "Meeting Reminder",
  description: `This is to remind you of your meeting with ${participantName} for ${studyID}. Click here to view the scheduled meeting.`,
  link: `/study/${studyID}/participants?participantID=${participantID}&action=messages`,
  color: "purple",
  icon: FaCalendar,
});

const defaultTemplate = () => ({
  title: "Default Notification",
  description: `This is a notification template that's being used because the notification type attribute is invalid.`,
  link: "/notifications",
  color: "red",
  icon: FaTimesCircle,
});

export default {
  createAccount,
  createStudy,
  deleteStudy,
  newParticipant,
  upcomingMeeting,
  defaultTemplate,
};
