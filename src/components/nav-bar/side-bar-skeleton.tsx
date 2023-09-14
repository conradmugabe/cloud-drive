import { Skeleton } from "@/components/skeleton";

type Props = {
  count?: number;
};

export function SideBarSkeleton({ count = 1 }: Props) {
  return (
    <aside className="bg-slate-100 h-auto w-1/6 p-4 space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-8 bg-slate-300" />
      ))}
    </aside>
  );
}
