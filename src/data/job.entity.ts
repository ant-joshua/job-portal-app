// {
//     title: "Admin Operation",
//     companyName: "PT Surya",
//     location: "Bekasi, Jawa Barat",
//     salary: "Rp. 5.000.000 - Rp. 10.000.000",
//     type: "Full Time",
//     date: "Posted 2 days ago",
//   },

export interface Job {
  title?: string;
  companyName?: string;
  location?: string;
  salary: string;
  date?: string;
  id?: string;
  slug?: string;
  description?: string;
  remote?: boolean;
  url?: string;
  tags?: string[];
  job_types?: string[];
  created_at?: number;
}
