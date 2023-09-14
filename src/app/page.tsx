import { NavBar, SideBar } from "@/components/nav-bar";

export default function Page() {
  return (
    <main className="h-screen flex flex-col">
      <NavBar />
      <section className="flex h-full">
        <SideBar />
        <section className="w-5/6 rounded-xl px-4 pt-4 flex flex-col gap-10"></section>
      </section>
    </main>
  );
}
