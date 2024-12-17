
import { Link, useLoaderData } from 'react-router-dom';

const JobDatails = () => {
  const job = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full" src={job.company_logo} alt={`${job.company} logo`} />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{job.title}</h1>
          <p className="text-sm text-gray-500">{job.company} | {job.location}</p>
          <p className="text-sm text-gray-500">{job.jobType} | Category: {job.category}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Job Description</h2>
        <p className="mt-2 text-gray-600">{job.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Requirements</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-600">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Responsibilities</h2>
        <ul className="mt-2 list-disc pl-6 text-gray-600">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-800">Salary: {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
          <p className="text-sm text-gray-500">Application Deadline: {job.applicationDeadline}</p>
        </div>
        <div>
          <Link to={`/jobApply/${job._id}`}>
            <button
              className="inline-block bg-gradient-to-r from-blue-200 to-blue-400 text-white px-6 py-2 rounded-full">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDatails;