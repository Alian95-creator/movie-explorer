function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* ICON */}
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg">
        🎬
      </div>

      {/* TEXT */}
      <h1 className="text-white font-bold text-lg tracking-wide">
        Movie<span className="text-red-500">Explorer</span>
      </h1>
    </div>
  );
}

export default Logo;