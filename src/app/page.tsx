import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center gap-x-10 justify-between p-10">
      <aside className="flex flex-col gap-y-10 h-[88vh]">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Grive.io
          </h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col text-lg gap-y-4 text-gray-800 dark:text-gray-200 tracking-wider">
            <li className="aside-item">Dashboard</li>
            <li className="aside-item">My Cloud</li>
            <li className="aside-item">Overview</li>
            <li className="aside-item">Favorites</li>
          </ul>

          <ul className="flex flex-col gap-y-4 text-gray-800 dark:text-gray-200">
            <li className="aside-item">Settings</li>
            <li className="aside-item ">Logout</li>
          </ul>
        </div>
      </aside>
      <section className="w-full h-[90vh] flex-1 rounded-xl background-orange-gradient">
        asdasd
      </section>
    </main>
  );
}
