import Features from "components/feature/External/HomeSections/Features/Features";

import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
  FcSurvey,
  FcCalendar,
  FcDataSheet,
  FcBarChart,
  FcAlarmClock,
  FcComments,
  FcPlanner,
  FcClock,
  FcDocument,
} from "react-icons/fc";

function FeatureSection() {
  const features = [
    {
      icon: <FcSurvey />,
      title: "Pre-Screening Survey",
      description:
        "The pre-screening survey can filter participants based on customizable inclusionary and exclusionary criteria",
    },
    {
      icon: <FcBarChart />,
      title: "Participant Eligibility Score",
      description:
        "The participant eligibility score will highlight the most qualified candidates based on their reponses to the survey",
    },
    {
      icon: <FcAlarmClock />,
      title: "Participant Reminders",
      description:
        "The reminder feature can be customized to alert your participants according to your study's specific needs",
    },
    {
      icon: <FcDocument />,
      title: "Participant Notes",
      description:
        "The notes feature allows you to privately record important details for the participants of your study",
    },
    {
      icon: <FcPlanner />,
      title: "Calendar View",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clitakasd gubergren, no sea takimata sanctus.",
    },
    {
      icon: <FcComments />,
      title: "Messaging",
      description:
        "Communicate effectively with participants through our HIPAA-compliant messaging feature",
    },
  ];

  return <Features features={features} />;
}

export default FeatureSection;
