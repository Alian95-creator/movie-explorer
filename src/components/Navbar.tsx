function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-red-500 text-2xl font-bold">MovieExplorer</h1>

      <div className="hidden md:flex gap-6 text-sm">
        <span className="hover:text-red-500 cursor-pointer">Home</span>
        <span className="hover:text-red-500 cursor-pointer">Trending</span>
        <span className="hover:text-red-500 cursor-pointer">Top Rated</span>
      </div>
    </div>
  );
}

export default Navbar;