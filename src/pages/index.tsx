import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Header Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
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

      {/* Hero Section */}
      <section className="bg-violet-900 text-white h-64 flex items-center">
        <form className="flex justify-center w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Cari Pekerjaan Impianmu</h1>
            <div className="flex gap-4">
              <input type="text" placeholder="Cari Pekerjaan" />
              <input type="text" placeholder="Lokasi" />
              <button className="bg-white text-violet-900 px-3 py-2 rounded-md">
                Cari
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Job Categories */}

      {/* Featured Jobs */}

      {/* How It Works */}

      {/* Testimonials */}

      {/* Footer */}

      {/* Floating Button */}
    </>
  );
}
