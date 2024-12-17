import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobApply, setJobApply] = useState();
  useEffect(() => {
    // fetch(`http://localhost:5000/jobApplication?email=${user?.email}`)
    // .then(res => res.json())
    // .then(data => {
    //     setJobApply(data)
    // })


    // axios.get(`http://localhost:5000/jobApplication?email=${user?.email}`, {
    // withCredentials: true
    // })
    // .then(res => console.log(setJobApply(res.data)))


    axios.get(`http://localhost:5000/jobApplication?email=${user?.email}`,
      { withCredentials: true })
      .then(ras => setJobApply(ras.data))

  }, [user.email])
  return (
    <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">My Job Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Logo</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Title</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Company</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Location</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Phone</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">LinkedIn</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">GitHub</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Resume</th>
              <th className="text-left px-6 py-3 text-gray-600 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobApply?.map((app) => (
              <tr key={app._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={app.company_logo}
                    alt={`${app.company} logo`}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{app.title}</td>
                <td className="px-6 py-4">{app.company}</td>
                <td className="px-6 py-4">{app.location}</td>
                <td className="px-6 py-4">{app.phone}</td>
                <td className="px-6 py-4">
                  <a
                    href={app.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={app.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </td>
                <td>
                  <button className="btn bg-gradient-to-r from-red-50 to-red-100 text-white"><MdDeleteForever color="red" size={30} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;