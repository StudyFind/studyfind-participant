import Yohan from "images/founders/yohan.png";
import Andrew from "images/founders/andrew.png";
import Team from "components/feature/External/HomeSections/Team/Team";

function TeamSection() {
  const title = "About the team";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  const founders = [
    {
      image: Yohan,
      name: "Yohan Jhaveri",
      position: "Co-Founder",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi",
    },
    {
      image: Andrew,
      name: "Andrew Garcia",
      position: "Co-Founder",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi",
    },
  ];

  const panels = [
    {
      title: "Interns",
      colorScheme: "blue",
      description:
        "Our interns have put in the time and effort to deliver the best quality product for researchers to use.",
      buttonText: "Meet the Interns",
      buttonLink: "/team#interns",
    },
    {
      title: "Advisory Board",
      colorScheme: "teal",
      description:
        "Our advisory board has given us the direction and strategy needed to build a product researchers love.",
      buttonText: "Meet the Advisory Board",
      buttonLink: "/team#board",
    },
    {
      title: "Collaborations",
      colorScheme: "purple",
      description:
        "Our collaborations have enabled us to constantly push boundaries and develop experimental products.",
      buttonText: "View our Collaborations",
      buttonLink: "/team#collaborations",
    },
  ];

  return <Team title={title} description={description} founders={founders} panels={panels} />;
}

export default TeamSection;
