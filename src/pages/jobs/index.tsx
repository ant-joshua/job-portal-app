"use client";

import { useRouter } from "next/router";
import SimpleJobCard from "../../components/jobs/simple.job.card";
import { Job } from "../../data/job.entity";
import { MainLayout } from "../../layouts/main.layout";
import { useEffect, useState } from "react";
import { ArbeitnowPaginationResponse } from "../../repository/arbeitnow.api";
import { useQuery } from "react-query";

export async function getJobs() {
  const fetchData = await fetch("http://localhost:3001/jobs");
  const response = (await fetchData.json()) as ArbeitnowPaginationResponse;

  const mappedData: Job[] = response.data.map((item) => {
    return {
      title: item?.title,
      companyName: item.company_name,
      location: item.location,
      salary: "",
      job_types: item.job_types,
      remote: item.remote,
      slug: item.slug,
      url: item.url,
      tags: item.tags,
      description: item.description,
    };
  });
  // date: new Date(item.created_at).toLocaleDateString(),

  return {
    data: mappedData,
    links: response.links,
    meta: response.meta,
  };
}

export default function Jobs() {
  const router = useRouter();

  const [featureJobs, setFeatureJobs] = useState<Job[]>([]);

  const { isLoading, error, data } = useQuery("repoData", () => getJobs());

  useEffect(() => {
    setFeatureJobs(data?.data ?? []);
  }, [data?.data]);



  // if (error) return <div>Error...</div>;

  return (
    <MainLayout>
      <section className="flex flex-row w-full mt-10 gap-4">
        {/* Job Card */}
        {isLoading && <div>Loading...</div>}
        {featureJobs.map((job) => (
          <div key={job.title} className="w-1/4">
            <SimpleJobCard
              key={job.title}
              data={job}
              onClick={() => router.push(`/jobs/${job.id}/detail`)}
            />
          </div>
        ))}
      </section>
    </MainLayout>
  );
}
