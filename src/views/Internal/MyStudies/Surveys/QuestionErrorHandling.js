function validateForm(questions, responses, setErrors, files) {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const hhmmToMinutes = (hhmm) => {
    const splt = hhmm.split(":");
    return 60 * Number(splt[0]) + Number(splt[1]);
  };

  const minutesToHhmm = (minutes) => {
    const mins = minutes % 60;
    const hrs = (minutes - mins) / 60;
    let hh = "";
    const mm = `${mins}`;
    let suffix = "AM";
    if (hrs > 12) {
      hh = `${hrs - 12}`;
      suffix = "PM";
    } else {
      hh = `${hrs}`;
    }
    return `${hh.length < 2 ? "0" + hh : hh}:${mm.length < 2 ? "0" + mm : mm} ${suffix}`;
  };

  for (let i = 0; i < questions.length; i++) {
    if (questions[i]?.constraints?.required) {
      if (questions[i]?.type === "file") {
        if (!responses[i] && !files.some((file) => file.index === i && !file.del)) {
          setErrors.updateItem("This question is required.", i);
          continue;
        }
      } else if (!responses[i]) {
        setErrors.updateItem("This question is required.", i);
        continue;
      }
    } else if (!responses[i]) {
      continue;
    }

    if (
      ["short answer", "long answer"].includes(questions[i]?.type) &&
      questions[i]?.constraints?.characterMin
    ) {
      const min = parseInt(questions[i].constraints.characterMin);
      if (responses[i].length < min) {
        setErrors.updateItem(`Response must be at least ${min} characters long.`, i);
        continue;
      }
    }

    if (questions[i]?.type === "number") {
      if (questions[i]?.constraints?.numberMin) {
        const min = Number(questions[i]?.constraints?.numberMin);
        if (Number(responses[i]) < min) {
          setErrors.updateItem(`Number must be greater than or equal to ${min}.`, i);
          continue;
        }
      }
      if (questions[i]?.constraints?.numberMax) {
        const max = Number(questions[i]?.constraints?.numberMax);
        if (Number(responses[i]) > max) {
          setErrors.updateItem(`Number must be less than or equal to ${max}.`, i);
          continue;
        }
      }
      if (questions[i]?.constraints?.numberInterval) {
        const interval = Number(questions[i]?.constraints?.numberInterval) || 1;
        const min = Number(questions[i]?.constraints?.numberMin) || 0;
        const max = Number(questions[i]?.constraints?.numberMax) || null;
        const resp = Number(responses[i]);
        if ((resp - min) % interval !== 0) {
          const lower = resp - ((resp - min) % interval);
          if (max && lower + interval > max) {
            setErrors.updateItem(`Invalid number. The nearest valid number is ${lower}.`, i);
          } else {
            setErrors.updateItem(
              `Invalid number. The nearest two valid numbers are ${lower} and ${lower + interval}.`,
              i
            );
          }
          continue;
        }
      }
    }

    if (questions[i]?.type === "email") {
      if (!emailRegex.test(responses[i])) {
        setErrors.updateItem("Please enter a valid email.", i);
      }
    }

    if (questions[i]?.type === "link") {
      if (!urlRegex.test(responses[i])) {
        setErrors.updateItem("Please enter a valid url.", i);
      }
    }

    if (questions[i]?.type === "time") {
      if (questions[i]?.constraints?.timeMin) {
        const min = hhmmToMinutes(questions[i]?.constraints?.timeMin);
        if (hhmmToMinutes(responses[i]) < min) {
          setErrors.updateItem(`Time must be at or later than ${minutesToHhmm(min)}.`, i);
          continue;
        }
      }
      if (questions[i]?.constraints?.timeMax) {
        const max = hhmmToMinutes(questions[i]?.constraints?.timeMax);
        if (hhmmToMinutes(responses[i]) > max) {
          setErrors.updateItem(`Time must be at or earlier than ${minutesToHhmm(max)}.`, i);
          continue;
        }
      }
      if (questions[i]?.constraints?.timeInterval) {
        const interval = parseInt(questions[i]?.constraints?.timeInterval) || 1;
        const min = hhmmToMinutes(questions[i]?.constraints?.timeMin) || 0;
        const max = hhmmToMinutes(questions[i]?.constraints?.timeMax) || 1440;
        const resp = hhmmToMinutes(responses[i]);
        if ((resp - min) % interval !== 0) {
          const lower = resp - ((resp - min) % interval);
          if (max && lower + interval > max) {
            setErrors.updateItem(
              `Invalid time. The nearest valid time is ${minutesToHhmm(lower)}.`,
              i
            );
          } else {
            setErrors.updateItem(
              `Invalid time. The nearest two valid times are ${minutesToHhmm(
                lower
              )} and ${minutesToHhmm(lower + interval)}.`,
              i
            );
          }
          continue;
        }
      }
    }
  }
}

export default validateForm;
