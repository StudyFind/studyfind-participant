import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import SearchHero from "./SearchHero";
import FindStudiesSection from "./FindStudiesSection/FindStudiesSection";
import FoundingTeamSection from "./FoundingTeamSection";
import EntireTeamSection from "./EntireTeamSection";
import ResearcherSection from "./ResearcherSection";

function Home() {
  return (
    <div>
      <Header />
      <SearchHero />
      <FindStudiesSection />
      <FoundingTeamSection />
      <EntireTeamSection />
      <ResearcherSection />
    </div>
  );
}

export default Home;
