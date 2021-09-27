import Yohan from "images/founders/yohan.png";
import Andrew from "images/founders/andrew.png";
import Team from "components/feature/External/HomeSections/Team/Team";

function TeamSection() {
  const title = "About Us";
  const description =
    "StudyFind was founded by Andrew and Yohan to make it easier for anyone and everyone to participate in clinical research. The StudyFind platform provides participants and researchers a conducive ecosystem to connect seamlessly.";

  const founders = [
    {
      image: Yohan,
      name: "Yohan Jhaveri",
      position: "Co-Founder",
      description:
        "Yohan recently graduated from Emory University with a degree in Computer Science and Economics",
    },
    {
      image: Andrew,
      name: "Andrew Garcia",
      position: "Co-Founder",
      description:
        "Andrew earned his Masters in Public Health at Emory University with a focus on Health Policy and Management",
    },
  ];

  const panels = [
    {
      title: "Our Team",
      colorScheme: "blue",
      description: "The talented individuals resonsible for the day-to-day operations at StudyFind",
      buttonText: "Meet the team",
      buttonLink: "/team#interns",
    },
    {
      title: "Advisory Board",
      colorScheme: "teal",
      description:
        "The diverse group of professionals that guide us in making a product researchers love",
      buttonText: "Meet the Advisory Board",
      buttonLink: "/team#board",
    },
    {
      title: "Collaborations",
      colorScheme: "purple",
      description: "The institutions that enable us to constantly push boundaries and innovate",
      buttonText: "View our Collaborations",
      buttonLink: "/team#collaborations",
    },
  ];

  return <Team title={title} description={description} founders={founders} panels={panels} />;
}

export default TeamSection;
