import { useEffect, useState } from "react";
import HotjobCard from "./HotjobCard";

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-5xl font-semibold text-blue-900">Jobs of the day</h1>
                <p className="text-xl mt-3 text-gray-500">
                    Search and connect with the right candidates faster.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <HotjobCard key={job._id} job={job}></HotjobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;