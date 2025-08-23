import React from "react";
import Overview from "../components/Overview";
import Mission from "../components/Mission";
import Achievements from "../components/Achievements";
import History from "../components/History";
import Members from "../components/Members";

export default function About() {
  return (
    <div>
      <Overview></Overview>
      <Mission></Mission>
      <Achievements></Achievements>
      <History></History>
      <Members></Members>
    </div>
  );
}
