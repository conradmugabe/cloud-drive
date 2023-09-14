import Link from "next/link";

import { Cloud, Folder } from "lucide-react";

const menu = [
  { name: "Cloud Drive", href: "/", Icon: Folder },
  { name: "Storage", href: "/storage", Icon: Cloud },
];

export function SideBarNav() {
  return (
    <>
      {menu.map(({ name, href, Icon }) => (
        <Link
          key={name}
          href={href}
          className="transition py-2 hover:bg-gray-300 flex items-center space-x-4 px-4 rounded-full"
        >
          {<Icon className="stroke-2 h-5 w-5" />}
          <span>{name}</span>
        </Link>
      ))}
    </>
  );
}
