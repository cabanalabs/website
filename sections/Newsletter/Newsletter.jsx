import React from "react";

export const Newsletter = () => {
  return (
    <section className="dark:bg-codGray bg-athensGray">
      <div className="section-content py-14 md:py-28">
        <h2 className="text-2xl xl:text-3xl font-black dark:text-athensGray text-codGray mb-4 md:mb-8">Newsletter</h2>
        <div>
          <span className="text-sm md:text-lg dark:text-grayChateau text-corduroy font-medium">
            Sign up to stay up-to-date on Cabana Labs progress.
          </span>
        </div>
      </div>
    </section>
  );
};
