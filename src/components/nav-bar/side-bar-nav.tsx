"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classnames from "classnames";

import { Cloud, Folder } from "lucide-react";

const menu = [
  { name: "Cloud Drive", href: "/", Icon: Folder },
  { name: "Storage", href: "/storage", Icon: Cloud },
];

export function SideBarNav() {
  const pathname = usePathname();

  return (
    <>
      {menu.map(({ name, href, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={name}
            href={href}
            className={classnames(
              "transition py-2 flex items-center space-x-4 px-4 rounded-full",
              { "bg-cyan-200 cursor-default": isActive },
              { "hover:bg-gray-300": !isActive },
            )}
          >
            {
              <Icon
                className={classnames("stroke-2 h-5 w-5", {
                  "fill-black": isActive,
                })}
              />
            }
            <span>{name}</span>
          </Link>
        );
      })}
    </>
  );
}
