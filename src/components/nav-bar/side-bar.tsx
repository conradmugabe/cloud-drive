import { SideBarNav } from "./side-bar-nav";
import { StorageBar } from "./storage-bar";

export function SideBar() {
  const totalStorage = 15;
  const usedStorage = 10.04;
  const percentageStorageUsed = (usedStorage / totalStorage) * 100;

  return (
    <aside className="bg-slate-100 h-auto w-1/6 p-4 flex flex-col">
      <SideBarNav />
      <div className="mt-4 space-y-2">
        <StorageBar percentageStorageUsed={percentageStorageUsed} />
        <p className="text-center font-light text-sm">
          {usedStorage} GB of {totalStorage} GB used
        </p>
      </div>
    </aside>
  );
}
