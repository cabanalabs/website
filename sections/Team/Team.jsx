import { useRef } from "react";

import { Button, SectionTitle, TeamCard } from "../../components";
import { useElementPosition } from "../../hooks";
import { teamData } from "./teamData";

export const Team = () => {
  const sectionRef = useRef(null);
  const { elementXPosition } = useElementPosition(sectionRef);

  return (
    <section className="py-14 md:py-28 space-y-6 xl:space-y-12">
      <div className="space-y-6 xl:space-y-12 max-w-xxl mx-auto px-4 2xl:px-0" ref={sectionRef}>
        <div className="max-w-small space-y-6 xl:space-y-12">
          <SectionTitle className="mb-6 xl:mb-12">Team</SectionTitle>
          <p className="font-medium text-sm xl:text-lg">
            We understand the importance of trust and security in the digital world, and our team works tirelessly to
            create seamless and robust systems that empower individuals and businesses alike.
          </p>
        </div>
      </div>
      <div
        style={{ paddingLeft: elementXPosition + "px" }}
        className="flex gap-10 w-full overflow-scroll scrollbar-hide snap-x p-6"
      >
        {teamData.map(member => (
          <TeamCard
            key={member.id}
            name={member.name}
            title={member.title}
            score={member.score}
            avatar={member.avatar}
          />
        ))}
      </div>
      <div className="max-w-xxl mx-auto px-4 2xl:px-0">
        <Button className="!bg-lochmara !border-lochmara">Contact Us</Button>
      </div>
    </section>
  );
};
