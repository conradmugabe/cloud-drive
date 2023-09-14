import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

import { Logo } from "./logo";

export function NavBar() {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-slate-100">
      <Logo />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
