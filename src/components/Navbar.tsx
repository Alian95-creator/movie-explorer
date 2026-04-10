import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-4 py-3">
      <div className="flex justify-between items-center">
        <h1
          onClick={() => scrollTo("home")}
          className="text-red-500 text-lg font-bold cursor-pointer"
        >
          MovieExplorer
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <span onClick={() => scrollTo("home")} className="cursor-pointer hover:text-red-500">Home</span>
          <span onClick={() => scrollTo("trending")} className="cursor-pointer hover:text-red-500">Trending</span>
          <span onClick={() => scrollTo("toprated")} className="cursor-pointer hover:text-red-500">Top Rated</span>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <span onClick={() => scrollTo("home")}>Home</span>
          <span onClick={() => scrollTo("trending")}>Trending</span>
          <span onClick={() => scrollTo("toprated")}>Top Rated</span>
        </div>
      )}
    </div>
  );
}

export default Navbar;