import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { BurgerMenu } from "./BurgerMenu";
import { navData } from "./navigationData";
import { Logo } from "../Logo/Logo";
import { NavItem } from "./NavItem";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-24 sticky top-0 left-0 z-20 bg-white/70 backdrop-blur-md drop-shadow-small dark:bg-woodSmoke/70">
      <nav className="flex justify-between items-center m-auto h-full max-w-3xl px-10 2xl:px-4 relative">
        <div className="cursor-pointer hover:scale-[1.02] active:scale-100 transition-all">
          <Link href="/">
            <a aria-label="Link to homepage">
              <Logo />
            </a>
          </Link>
        </div>
        <motion.div className="sm:hidden" initial={false} animate={isOpen ? "open" : "closed"} custom="100%">
          <BurgerMenu toggle={() => setIsOpen(prevState => !prevState)} />
          <motion.div
            className="bg-codGray opacity-50 p-4 absolute top-16 right-0"
            variants={{
              closed: {
                opacity: 0,
                visibility: "hidden",
                y: -100,
              },
              open: {
                opacity: 1,
                visibility: "visible",
                y: 0,
              },
            }}
            transition={{ duration: 0.1 }}
          >
            <ul className="flex flex-col gap-4 ">
              {navData.map(item => (
                <li key={item.label}>
                  <NavItem href={item.to} label={item.label} />
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <ul className="hidden sm:flex gap-9 items-center">
          {navData.map(item => {
            if (item.hidden) return null;

            return (
              <li key={item.label}>
                <NavItem href={item.to} label={item.label} type={item.type} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
