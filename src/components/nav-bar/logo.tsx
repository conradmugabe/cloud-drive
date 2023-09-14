import Link from "next/link";

import { Cloud, LucideProps } from "lucide-react";

export function Logo(props: LucideProps) {
  return (
    <Link href="/">
      <Cloud className="h-12 w-12 stroke-2 stroke-cyan-500" {...props} />
    </Link>
  );
}
{
}
