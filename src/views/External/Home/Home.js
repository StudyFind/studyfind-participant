import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import FindStudiesSection from "./FindStudiesSection";
import FoundingTeamSection from "./FoundingTeamSection";
import EntireTeamSection from "./EntireTeamSection";
import ResearcherSection from "./ResearcherSection";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FindStudiesSection />
      <FoundingTeamSection />
      <EntireTeamSection />
      <ResearcherSection />
    </div>
  );
}

export default Home;
