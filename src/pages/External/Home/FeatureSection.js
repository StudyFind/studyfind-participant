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
  FcInspection,
  FcAnswers,
  FcCollaboration,
  FcVideoCall,
  FcOvertime,
  FcHighPriority,
  FcAbout,
  FcApproval,
  FcDisplay,
  FcInfo,
  FcFinePrint,
  FcList,
  FcRules,
} from "react-icons/fc";

function FeatureSection() {
  const features = [
    {
      icon: <FcSurvey />,
      title: "Screening Survey",
      description:
        "A brief survey that will help you automatically know what studies you may qualify for",
    },
    {
      icon: <FcOvertime />,
      title: "Reminders",
      description: "Our reminders feature will keep you on track with study requirements",
    },
    {
      icon: <FcCollaboration />,
      title: "Secure Messaging",
      description:
        "We value your privacy, so rest assured our messaging feature is HIPAA compliant",
    },
    {
      icon: <FcVideoCall />,
      title: "Meetings",
      description:
        "Get on calls with researchers at different milestones in the participation process",
    },
    {
      icon: <FcCalendar />,
      title: "Calendar",
      description:
        "The calendar feature allows you to view all your scheduled meetings in a single place",
    },
    {
      icon: <FcAbout />,
      title: "Notifications",
      description:
        "The notification feature keeps you updated about your status in the recruitment process",
    },
  ];

  return <Features features={features} />;
}

export default FeatureSection;
