import { FileNodeSkeleton } from "@/components/file-system";
import { NavBarSkeleton, SideBarSkeleton } from "@/components/nav-bar";
import { Skeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <main className="h-screen flex flex-col">
      <NavBarSkeleton />
      <section className="flex h-full">
        <SideBarSkeleton count={5} />
        <section className="w-5/6 rounded-xl px-4 pt-4 flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-1/5 bg-slate-300" />
            <Skeleton className="h-8 w-12 bg-slate-300" />
          </div>
          <FileNodeSkeleton count={10} />
        </section>
      </section>
    </main>
  );
}
