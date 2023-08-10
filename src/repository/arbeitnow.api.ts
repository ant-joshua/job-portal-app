import { Job } from "../data/job.entity";

export interface ArbeitnowPaginationResponse {
  data: ArbeitData[];
  links: Links;
  meta: Meta;
}

export interface ArbeitData {
  id?: string;
  slug?: string;
  company_name?: string;
  title?: string;
  description?: string;
  remote?: boolean;
  url?: string;
  tags?: string[];
  job_types?: string[];
  location?: string;
  created_at?: number;
}

export interface Links {
  first?: string;
  last?: null;
  prev?: null;
  next?: string;
}

export interface Meta {
  current_page?: number;
  from?: number;
  path?: string;
  per_page?: number;
  to?: number;
  terms?: string;
  info?: string;
}

export async function getJobs() {
  const fetchData = await fetch("https://arbeitnow.com/api/job-board-api");
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
