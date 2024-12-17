import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const AddJob = () => {
    const navigate = useNavigate();
    const {user} = useAuth();


    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        // console.log(newJob)

        // 3 fields object a convert
        newJob.salaryRange = { min, max, currency }

        // text area k array ta convert
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job Has Been Successfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Post a New Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>

                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
                </div>

                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Type</span>
                    </label>
                    <select defaultValue={'Pick a Job Type'} className="select select-bordered">
                        <option disabled>Pick a Job Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                    </select>
                </div>

                {/* Job Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Field</span>
                    </label>
                    <select defaultValue="Pick a Job Field" className="select select-bordered">
                        <option disabled>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>

                {/* Salary Range */}
                <p className="mt-4 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Salary Range</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Min Salary</span>
                        </label>
                        <input type="number" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Max Salary</span>
                        </label>
                        <input type="number" name='max' placeholder="Max " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Currency</span>
                        </label>
                        <select defaultValue="Currency" name="currency" className="select select-bordered">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>

                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description" required></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                </div>

                {/* Requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="put each requirements in a new line" name="requirements" required></textarea>
                </div>

                {/* Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each responsibility in a new line" name="responsibilities" required></textarea>
                </div>

                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Application Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                </div>

                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>

                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">HR Email</span>
                    </label>
                    <input type="text" name='hr_email' defaultValue={user?.email} placeholder="HR Email" className="input input-bordered" required />
                </div>

                {/* Company Logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-blue-500 to-blue-200 text-white text-xl">Submit Job</button>
                </div>
            </form>
        </div>


    );
};

export default AddJob;