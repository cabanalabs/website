import { useRef } from "react";

import { Button, SectionTitle, TeamCard } from "../../components";
import { useElementPosition } from "../../hooks";
import { teamData } from "./teamData";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const Team = () => {
  const sectionRef = useRef(null);
  const { elementXPosition } = useElementPosition(sectionRef);

  return (
    <section className="py-14 md:py-28 space-y-6 xl:space-y-12">
      <div className="space-y-6 xl:space-y-12 max-w-xxl mx-auto px-4 2xl:px-0" ref={sectionRef}>
        <div className="space-y-6 xl:space-y-12">
          <SectionTitle className="max-w-[350px] xl:max-w-small mb-6 xl:mb-12">It's Time to Build with Trust</SectionTitle>
          <SectionBody className="max-w-small">
            Are you ready to create a thriving, secure, and rewarding community? Contact us today to discover how Cabana Identity can unlock your community’s full potential.
          </SectionBody>
        </div>
      </div>
      <div
        style={{ paddingLeft: elementXPosition + "px" }}
        className="flex gap-10 w-full overflow-scroll scrollbar-hide snap-x p-6"
      >
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            score={member.score}
            avatar={member.avatar}
          />
        ))}
      </div>
      {/*<div className="max-w-xxl mx-auto px-4 2xl:px-0">*/}
      {/*  <Button className="!bg-lochmara !border-lochmara">Contact Us</Button>*/}
      {/*</div>*/}
    </section>
  );
};
