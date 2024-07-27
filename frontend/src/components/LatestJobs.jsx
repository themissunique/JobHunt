import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <br />
      {allJobs.length <= 0 ? (
        <span className="text-center mt-4">No jobs available</span>
      ) : (
        <div className="grid grid-cols-3 gap-4 my-5">
          {allJobs?.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
