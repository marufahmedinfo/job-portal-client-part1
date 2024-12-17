import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const VewApplication = () => {
    const applications = useLoaderData();
    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)
        const datas = {
            status: e.target.value
        };
        fetch(`http://localhost:5000/jobApplications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Has been Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VewApplication;