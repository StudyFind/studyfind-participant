import Pricing from "components/feature/External/HomeSections/Pricing/Pricing";

import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";

function PricingSection() {
  const plans = [
    {
      icon: SiMicrosoft,
      name: "Basic",
      price: ["$29", "$19"],
      features: ["Create Studies", "Recruit Participants", "Track Participant Status"],
    },

    {
      icon: SiMarketo,
      name: "Standard",
      price: ["$99", "$79"],
      features: ["Everything in Basic", "Participant Reminders", "Schedule Meetings"],
      isPopular: true,
    },

    {
      icon: SiHive,
      name: "Premium",
      price: ["$249", "$199"],
      features: ["Everything in Standard", "Instant Messaging", "Email and Text Notifications"],
    },
  ];

  return (
    <Pricing
      title="Pricing Plans"
      description="Start with a free three month trial and then pick the plan of your liking. Account plans
  unlock additional features and newer features may arrive to higher tier plans first."
      plans={plans}
    />
  );
}

export default PricingSection;
