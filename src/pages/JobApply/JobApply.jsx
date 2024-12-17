
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    // console.log(id, user);
    const navigate = useNavigate();

    const handleSubmitJobApplicaton = (e) => {
        e.preventDefault();
        const frm = e.target;
        const name = frm.name.value;
        const phone = frm.phone.value;
        const linkedin = frm.linkedin.value;
        const github = frm.github.value;
        const coverLetter = frm.coverLetter.value;
        const resume = frm.resume.value;
        const applicatioId = {
            job_id: id,
            name,
            phone,
            linkedin,
            github,
            coverLetter,
            resume,
            appplication_emailL: user.email,

        };
        fetch('http://localhost:5000/jobApplications', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicatioId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Successfully Apply",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    frm.reset();
                    navigate('/myApplication')
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Apply for the Job</h1>
            <form onSubmit={handleSubmitJobApplicaton} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Full Name"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* LinkedIn Profile */}
                <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                        LinkedIn Profile
                    </label>
                    <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Enter Your Linkedin Profile Link"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* GitHub Profile */}
                <div>
                    <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                        GitHub Profile
                    </label>
                    <input
                        type="url"
                        id="github"
                        name="github"
                        placeholder="Enter Your GitHub Profile Link"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Cover Letter Input */}
                <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                        Cover Letter
                    </label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows="5"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Resume Upload */}
                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                        Upload Resume
                    </label>
                    <input
                        type="url"
                        id="resume"
                        name="resume"
                        placeholder="Enter Your Resume Link"
                        required
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-200 to-blue-400 text-white py-2 px-4 rounded-md "
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;