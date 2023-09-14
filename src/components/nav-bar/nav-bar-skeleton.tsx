import { Skeleton } from "@/components/skeleton";

export function NavBarSkeleton() {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-slate-100">
      <Skeleton className="bg-slate-300 h-12 w-28 rounded-lg" />
      <Skeleton className="h-12 w-12 rounded-full bg-slate-300" />
    </header>
  );
}
