import { Button, ScrollToTop } from "../../components";

export const Newsletter = () => {
  return (
    <section className="dark:bg-codGray bg-athensGray">
      <div className="max-w-[1092px] mx-auto px-4 2xl:px-0 py-14 md:py-28 relative">
        <h2 className="text-2xl xl:text-3xl font-black dark:text-athensGray text-codGray mb-4 md:mb-8">Newsletter</h2>
        <div>
          <span className="text-sm md:text-lg dark:text-grayChateau text-corduroy font-medium">
            Sign up to stay up-to-date on Cabana Labs progress.
          </span>
          <div className="mt-2">
            <input
              placeholder="Email"
              className="dark:bg-woodSmoke bg-white rounded-full py-4 px-6 text-lg font-medium dark:text-grayChateau outline-none dark:placeholder:text-grayChateau/40 placeholder:text-corduroy/40 md:min-w-[333px] mb-4 md:mb-0"
            />
            <Button className="!bg-lochmara !border-lochmara">Sign up</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40 right-40 hidden md:block">
        <ScrollToTop />
      </div>
    </section>
  );
};
