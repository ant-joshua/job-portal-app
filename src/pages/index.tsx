import Image from "next/image";
import { Inter } from "next/font/google";
import { MainLayout } from "../layouts/main.layout";
import { Job } from "../data/job.entity";
import SimpleJobCard from "../components/jobs/simple.job.card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const featureJobs: Job[] = [
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
    <MainLayout>
      {/* Header Navbar */}

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
            <div key={job.title} className="w-1/4">
              <SimpleJobCard
                key={job.title}
                data={job}
                onClick={() => console.log("home")}
              />
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
    </MainLayout>
  );
}
