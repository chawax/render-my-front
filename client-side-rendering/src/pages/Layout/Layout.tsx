import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-black p-4 sticky top-0">
        <Link to="/movies">
          <h1 className="text-3xl text-white font-bold">My Movies</h1>
        </Link>
        <span className="text-white">Client Side Rendering</span>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
