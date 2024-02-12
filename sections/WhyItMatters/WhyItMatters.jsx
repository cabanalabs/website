import { Button, SectionTitle } from "../../components";

export const WhyItMatters = () => {
  return (
    <section className="section">
      <div className="max-w-small mx-auto space-y-6 xl:space-y-12">
        <SectionTitle className="mb-6 xl:mb-12">Why does it matter?</SectionTitle>
        <div className="font-medium text-sm xl:text-lg space-y-4">
          <p>
            By leveraging your online reputation, you can forge meaningful connections, attract valuable opportunities,
            and unlock new avenues for personal and professional growth.
          </p>
          <p>
            Cabana ID acts as a trusted foundation for individuals to build their digital presence, ensuring that their
            identity is both verifiable and immutable.{" "}
          </p>
          <p>
            Join Cabana ID to harness the power of trust, unlock your online reputation, and make a lasting impact in
            the interconnected world.
          </p>
        </div>
        <Button className="!bg-lochmara !border-lochmara">Create CabanaID</Button>
      </div>
    </section>
  );
};
