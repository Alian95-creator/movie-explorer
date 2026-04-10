import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-red-500 text-lg font-bold">
          MovieExplorer
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <span>Home</span>
          <span>Trending</span>
          <span>Top Rated</span>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <span>Home</span>
          <span>Trending</span>
          <span>Top Rated</span>
        </div>
      )}
    </div>
  );
}

export default Navbar;