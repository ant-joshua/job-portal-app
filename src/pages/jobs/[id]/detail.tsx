import { useRouter } from "next/router";
import { Job } from "../../../data/job.entity";
import { useEffect, useMemo, useState } from "react";
import { MainLayout } from "../../../layouts/main.layout";
import {useQuery} from "react-query";


export async function getJob(id: string) {
    const fetchData = await fetch(`http://localhost:3001/jobs/${id}`);
    const response = await fetchData.json() as {data:Job};

    return response;
}

export default function JobDetail() {
  const router = useRouter();

  const [job, setJob] = useState<Job | undefined>(undefined);

  const {isLoading,data} = useQuery("jobsDetail", () => getJob(router.query?.id as string), {
    enabled: !!router.query?.id,
  });

  useEffect(() => {
    setJob(data?.data);
  })


  // useEffect(() => {
  //   const job = featureJobs.find((job) => job.id === router.query?.id);
  //
  //   setJob(job);
  // }, [featureJobs, router.query?.id]);

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
          <div className={"prose"} dangerouslySetInnerHTML={
            {__html: job?.description ?? "No description"}
          }>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
