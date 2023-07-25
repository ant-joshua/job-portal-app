import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const featureJobs = [
    {
      title: "Admin Operation",
      companyName: "PT Surya",
      location: "Bekasi, Jawa Barat",
      salary: "Rp. 5.000.000 - Rp. 10.000.000",
      type: "Full Time",
      date: "Posted 2 days ago",
    },
    {
      title: "Product Manager",
      companyName: "PT Indah",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 10.000.000 - Rp. 15.000.000",
      type: "Full Time",
      date: "Posted 2 days ago",
    },
    {
      title: "Software Engineer",
      companyName: "PT Indopasifik Teknologi Medika Indonesia",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 10.000.000 - Rp. 15.000.000",
      type: "Full Time",
      date: "Posted 2 days ago",
    },
    {
      title: "Graphic Designer",
      companyName: "PT Indopasifik Teknologi Medika Indonesia",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 10.000.000 - Rp. 15.000.000",
      type: "Full Time",
      date: "Posted 2 days ago",
    },
  ];

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
              <input
                type="text"
                className="px-3 rounded-md"
                placeholder="Cari Pekerjaan"
              />
              <input
                type="text"
                className="px-3 rounded-md"
                placeholder="Lokasi"
              />
              <select className="px-4 text-gray-400 rounded-md">
                <option value="1">Kategori</option>
                <option value="2">Kategori 2</option>
                <option value="3">Kategori 3</option>
              </select>
              <button className="bg-white text-violet-900 px-3 py-2 rounded-md">
                Cari
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="flex flex-col p-10">
        <h1 className="font-bold text-4xl text-center text-uppercase text-violet-950">
          Feature Jobs
        </h1>

        <section className="flex flex-row w-full mt-10 gap-4">
          {/* Job Card */}
          {featureJobs.map((job) => (
            <div
              className="flex w-1/4 border-2 border-blue-200 shadow-md rounded-md p-6 hover:cursor-pointer hover:shadow-xl"
              key={job.title}
            >
              <div className="flex flex-col justify-between">
                {/* Job Title */}
                <div>
                  <h2 className="text-xl font-bold text-violet-500">
                    {job.title}
                  </h2>
                  {/* Company Name */}
                  <h4 className="text-md">{job.companyName}</h4>
                </div>

                <div className="mt-5">
                  {/* Job Location */}
                  <h4 className="font-semibold">{job.location}</h4>
                  {/* Job Salary */}
                  <h4 className="font-semibold">{job.salary}</h4>
                </div>

                <div className="mt-5">
                  {/* Job Type */}
                  <button className="px-3 py-1 bg-[#E60378] text-white rounded-lg">
                    {job.type}
                  </button>
                  {/* Job Posting Date */}
                  <h4 className="text-gray-500 mt-5">{job.date}</h4>
                </div>
              </div>
            </div>
          ))}
        </section>
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
