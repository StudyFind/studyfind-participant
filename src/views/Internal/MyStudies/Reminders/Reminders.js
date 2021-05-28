import React, { useState, useContext } from "react";
import moment from "moment";
import { auth, firestore } from "database/firebase";
import { useCollection } from "hooks";
import { UserContext } from "context";

import { Spinner } from "components";

import RemindersView from "./RemindersView";
import RemindersError from "./RemindersError";

function Reminders({ study }) {
  const user = useContext(UserContext);

  const defaultInputs = {
    title: "",
    weekdays: [false, false, false, false, false, false, false],
    times: [],
    startDate: "",
    endDate: "",
  };

  const { uid } = auth.currentUser;

  const fittedRemindersRef = firestore
    .collection("reminders")
    .where("participantID", "==", uid)
    .where("studyID", "==", study.id);

  const [reminders, loading, error] = useCollection(fittedRemindersRef);

  const [inputs, setInputs] = useState(defaultInputs);

  const convertEpochToHMS = (ms) => {
    const second = (ms / 1000) % 60;
    const minute = ((ms / 1000 - second) / 60) % 60;
    const hour = (ms / 1000 - minute * 60 - second) / 3600;
    return { hour, minute, second };
  };

  const getDayIndexFromOffset = (offset) => {
    const offsetHour = convertEpochToHMS(offset);
    return Math.floor(offsetHour.hour / 24);
  };

  const getDaysFromOffsets = (offsets) => {
    const weekdaysBoolean = [false, false, false, false, false, false, false];

    for (const offset of offsets) {
      const day = getDayIndexFromOffset(offset);
      weekdaysBoolean[day] = true;
    }

    return weekdaysBoolean;
  };

  const getTimesFromOffsets = (offsets) => {
    const allTimes = [];
    const numberOfDaysSelected = getDaysFromOffsets(offsets).filter(
      (value) => value
    ).length;

    for (let i = 0; i < offsets.length; i++) {
      const thisHour = convertEpochToHMS(offsets[i]).hour % 24;
      const thisMinute = convertEpochToHMS(offsets[i]).minute;
      let newTime;
      if (thisMinute / 10 < 1) {
        newTime = `${thisHour}:0${thisMinute}`;
      } else {
        newTime = `${thisHour}:${thisMinute}`;
      }
      allTimes.push(newTime);
    }

    return allTimes;
  };

  const formatDate = (date) => {
    return moment(date).tz(user.timezone).format("MMMM D, YYYY");
  };

  // const convertDate = (date) => {
  //   const converted = date.toDate();
  //   const month = converted.getMonth() + 1;
  //   const day = converted.getDate();
  //   const year = converted.getFullYear();
  //   let returnedDate;
  //   if (month < 10) {
  //     if (day < 10) {
  //       return `${year}-0${month}-0${day}`;
  //     } else {
  //       return `${year}-0${month}-${day}`;
  //     }
  //   } else {
  //     if (day < 10) {
  //       return `${year}-${month}-0${day}`;
  //     } else {
  //       return `${year}-${month}-${day}`;
  //     }
  //   }
  // };
  //
  // const convertToTimes = () => {
  //   var allTimes = [];
  //   const weekdayBoolean = inputs.weekdays;
  //   for (const weekday in weekdayBoolean) {
  //     if (weekdayBoolean[weekday]) {
  //       inputs.times.map((time, index) => {
  //         const [hour, min] = time.split(":");
  //         const thisTime = ((parseInt(hour) + 24 * weekday) * 60 + parseInt(min)) * 60 * 1000;
  //         allTimes.push(thisTime);
  //       });
  //     }
  //   }
  //   return allTimes;
  // };

  const handleConfirm = (reminder) => {
    firestore.collection("reminders").doc(reminder.id).update({
      confirmedByParticipant: true,
    });
  };

  if (loading) return <Spinner />;
  if (error) return <RemindersError />;

  return (
    <RemindersView
      reminders={reminders}
      formatDate={formatDate}
      getDaysFromOffsets={getDaysFromOffsets}
      getTimesFromOffsets={getTimesFromOffsets}
      handleConfirm={handleConfirm}
    />
  );
}

export default Reminders;
