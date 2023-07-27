export type NavHeaderProps = {
  isDark?: boolean;
};

export default function NavHeader(
  { isDark }: NavHeaderProps = {
    isDark: false,
  }
) {
  return (
    <header
      className={`sticky top-0 z-50 ${
        !isDark ? "bg-white" : "bg-black text-white"
      } shadow-md`}
    >
      <div className="flex justify-between">
        {/* Logo */}
        <div className="flex items-center py-10 pl-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGOSL7M9SjcnXPZzhAoaoHeuqovTraxTshAqccnxc&s"
            alt="Logo"
            className="h-12"
          />
        </div>

        <div className="flex items-center gap-4 pr-5">
          <button>Untuk Kandidat</button>
          <button>Untuk Perusahaan</button>
          <button className="text-violet-900 border-2 border-violet-900 px-3 py-2 rounded-md">
            Login
          </button>
          <button className="text-violet-900 border-2 border-violet-900 px-3 py-2 rounded-md">
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
}
