import { Skeleton } from "@/components/skeleton";

type Props = {
  count?: number;
};

export function FileNodeSkeleton({ count = 1 }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="grid grid-cols-4 space-x-10">
          <Skeleton className="h-8 bg-slate-300" />
          <Skeleton className="h-8 bg-slate-300" />
          <Skeleton className="h-8 bg-slate-300" />
          <Skeleton className="h-8 bg-slate-300" />
        </div>
      ))}
    </div>
  );
}
