import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [MyJobs, setMyJobs] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyJobs(data)
        })

    },[user.email])
    return (
        <div>
        <h2 className='text-3xl'>My Posted Jobs: {MyJobs.length}</h2>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-xl font-bold">Job Title</th>
                        <th className="text-xl font-bold">Deadline</th>
                        <th className="text-xl font-bold">Application Count</th>
                        <th className="text-xl font-bold">Applications</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MyJobs.map((job, index) => <tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.applicationDeadline}</td>
                            <td>{job.applicationCount}</td>
                            <td>
                                <Link to={`/vewApplication/${job._id}`}>
                                    <button className='btn btn-link'>View Applications</button>
                                </Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPostedJobs;