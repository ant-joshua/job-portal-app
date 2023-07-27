import SimpleJobCard from "../components/jobs/simple.job.card";
import { Job } from "../data/job.entity";
import { MainLayout } from "../layouts/main.layout";

export default function Jobs() {
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
      <section className="flex flex-row w-full mt-10 gap-4">
        {/* Job Card */}
        {featureJobs.map((job) => (
          <div key={job.title} className="w-1/4">
            <SimpleJobCard
              key={job.title}
              data={job}
              onClick={() => console.log("jobs")}
            />
          </div>
        ))}
      </section>
    </MainLayout>
  );
}
