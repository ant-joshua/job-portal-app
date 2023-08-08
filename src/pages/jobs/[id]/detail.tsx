import { useRouter } from "next/router";
import { Job } from "../../../data/job.entity";
import { useEffect, useMemo, useState } from "react";
import { MainLayout } from "../../../layouts/main.layout";

export default function JobDetail() {
  const router = useRouter();

  const [job, setJob] = useState<Job | undefined>(undefined);

  const featureJobs: Job[] = useMemo(
    () => [
      {
        id: "1",
        title: "Admin Operation",
        companyName: "PT Surya",
        location: "Bekasi, Jawa Barat",
        salary: "Rp. 5.000.000 - Rp. 10.000.000",
        type: "Full Time",
        date: "Posted 2 days ago",
      },
      {
        id: "2",
        title: "Product Manager",
        companyName: "PT Indah",
        location: "Jakarta, DKI Jakarta",
        salary: "Rp. 10.000.000 - Rp. 15.000.000",
        type: "Full Time",
        date: "Posted 2 days ago",
      },
      {
        id: "3",
        title: "Software Engineer",
        companyName: "PT Indopasifik Teknologi Medika Indonesia",
        location: "Jakarta, DKI Jakarta",
        salary: "Rp. 10.000.000 - Rp. 15.000.000",
        type: "Full Time",
        date: "Posted 2 days ago",
      },
      {
        id: "4",
        title: "Graphic Designer",
        companyName: "PT Indopasifik Teknologi Medika Indonesia",
        location: "Jakarta, DKI Jakarta",
        salary: "Rp. 10.000.000 - Rp. 15.000.000",
        type: "Full Time",
        date: "Posted 2 days ago",
      },
    ],
    []
  );

  useEffect(() => {
    const job = featureJobs.find((job) => job.id === router.query?.id);

    setJob(job);
  }, [featureJobs, router.query?.id]);

  return (
    <MainLayout bgColor="bg-gray-100">
      <section className="px-20 py-10 bg-white drop-shadow-sm">
        <section className="flex flex-row justify-between">
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-bold">{job?.title}</h4>
            <h4 className="text-lg font-semibold">{job?.companyName}</h4>
            <h4 className="text-lg">{job?.location}</h4>
            <h4 className="text-lg">{job?.date}</h4>
          </div>
          <div className="flex flex-col justify-center">
            <button className="px-3 py-2 bg-[#E60378] text-white rounded-lg text-xl">
              Apply
            </button>
          </div>
        </section>

        <section></section>
      </section>

      <section className="mt-12 px-20 py-20 bg-white drop-shadow-sm">
        <h2 className="text-lg">Job Description</h2>
        <div className="flex flex-col">
          <div>
            <p>
              PT. OLIP AND WIRE METAL Deskripsi Pekerjaan : Kami perusahaan
              trading asing (Jepang) yang bergerak di bidang sales elektronik
              dan industrial products, untuk automotive assembly parts.
              Membutuhkan tenaga kerja muda professional sebagai : Admin
              Assistant Kualifikasi dan Skill : Pendidikan minimal D3 /
              sederajat Fresh school leaver can apply Good personality & PC
              literate Deskripsi Pekerjaan : Memberikan dukungan administratif
              dengan melakukan tugas-tugas administrasi seperti penginputan
              delivery order dll. Menginput sales invoice, dan transaksi
              lainnya. Melakukan pengecekan stock month end closing dan laporan
              kepada Manajer Benefit : Asuransi ketenagakerjaan dan kesehatan
              Salary yang menarik
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
