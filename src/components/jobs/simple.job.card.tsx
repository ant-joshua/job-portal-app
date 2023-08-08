import { Job } from "../../data/job.entity";

export type SimpleJobCardProps = {
  data?: Job;
  onClick?: () => void;
};

export default function SimpleJobCard(
  { data, onClick }: SimpleJobCardProps = {
    data: undefined,
  }
) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="flex border-2 border-blue-200 shadow-md rounded-md p-6 hover:cursor-pointer hover:shadow-xl"
      key={data?.title}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-between">
        {/* Job Title */}
        <div>
          <h2 className="text-xl font-bold text-violet-500">{data?.title}</h2>
          {/* Company Name */}
          <h4 className="text-md">{data?.companyName}</h4>
        </div>

        <div className="mt-5">
          {/* Job Location */}
          <h4 className="font-semibold">{data?.location}</h4>
          {/* Job Salary */}
          <h4 className="font-semibold">{data?.salary}</h4>
        </div>

        <div className="mt-5">
          {/* Job Type */}
          <button className="px-3 py-1 bg-[#E60378] text-white rounded-lg">
            {data?.job_types}
          </button>
          {/* Job Posting Date */}
          <h4 className="text-gray-500 mt-5">{data?.date}</h4>
        </div>
      </div>
    </div>
  );
}
