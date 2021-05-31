const deleteMeeting = {
  title: "Confirm Delete Meeting",
  description: `Deleting this meeting cannot be undone and will notify the respective participant. Are you sure you want to delete it?`,
  button: "Delete",
  color: "red",
};

const deleteReminder = {
  title: "Confirm Delete Reminder",
  description: `Deleting this reminder cannot be undone and will notify the respective participant. Are you sure you want to delete it?`,
  button: "Delete",
  color: "red",
};

const deleteNote = {
  title: "Confirm Delete Note",
  description: `Deleting this private note cannot be undone. Are you sure you want to delete it?`,
  button: "Delete",
  color: "red",
};

const deleteStudy = {
  title: "Confirm Delete Study",
  description: `Deleting this study removes it from your account and you will not be able to recover any changes made to the study. Are you sure you want to delete this study?`,
  button: "Delete",
  color: "red",
};

const publishStudy = {
  title: "Confirm Publish Study",
  description: `Publishing this study makes it visible to participants who can sign up for your study. Are you sure you want to publish this study?`,
  button: "Publish",
  color: "green",
};

export default {
  deleteMeeting,
  deleteReminder,
  deleteNote,
  deleteStudy,
  publishStudy,
};
