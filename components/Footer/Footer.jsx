import { footerData } from "./footerData";
import { NavItem } from "../Navigation/NavItem";

export const Footer = () => {
  return (
    <footer className="dark:bg-codGray bg-athensGray">
      <div className="section-content h-24 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-normal px-10 2xl:px-4">
        <p className="flex justify-center md:flex-1 text-sm font-medium dark:text-linkWater text-prussianBlue">
          Copyright © Cabana Labs 2023
        </p>
        <ul className="flex gap-9 items-center md:h-full md:ml-auto">
          {footerData.map(data => (
            <li key={data.category}>
              <NavItem label={data.category} href={data.to} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
