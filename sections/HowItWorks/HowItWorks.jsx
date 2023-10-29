import { howItWorksData } from "./howItWorksData";

export const HowItWorks = () => {
  return (
    <section className="section xl:pt-64">
      <h2 className="text-2xl xl:text-3xl text-center font-black text-gradient-purple mb-20 xl:mb-36">
        How does it work?
      </h2>

      <div className="grid gap-10 md:gap-0 md:grid-cols-3">
        {howItWorksData.map(({ number, title, description, id }) => {
          return (
            <div key={id} className="px-6 xl:px-20">
              <span className="text-3xl xl:text-5xl font-black text mb-9">{number}</span>
              <p className="text-lg xl:text-xl font-black mb-4">{title}</p>
              <p className="text-sm xl:text-lg font-medium">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
