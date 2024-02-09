import Link from "next/link";

import { Button } from "../Button/Button";

export const NavItem = ({ label, href, type }) => {
  if (type === "button") {
    return (
      <Link href={href} passHref>
        <Button type="outlined">{label}</Button>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <span className="dark:text-linkWater text-prussianBlue text-sm font-medium cursor-pointer hover:font-bold transition-all">
        {label}
      </span>
    </Link>
  );
};
