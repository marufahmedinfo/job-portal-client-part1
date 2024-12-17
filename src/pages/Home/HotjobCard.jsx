import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotjobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center gap-4">
                <img
                    src={company_logo}
                    alt="LinkedIn Logo"
                    className="w-14 h-14 rounded-full"
                />
                <div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">{company}</h3>
                    <p className="text-gray-500 text-sm flex gap-1 items-center"><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <p className="text-lg items-center gap-1 font-bold mt-1 flex">{title}
                <div className="badge badge-secondary">NEW</div>
            </p>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className='flex gap-2 flex-wrap'>
                {
                    requirements.map((skill, index) => <p
                        key={index}
                        className='border rounded-md text-center px-2 hover:text-purple-900 hover:bg-gray-200'
                    >{skill}</p>)
                }
            </div>
            <div className="flex items-center justify-between mt-4 flex-wrap">
                <p className="text-xl font-semibold text-gray-900 flex items-center">Salary:  <FaDollarSign /><span className="text-gray-500">{salaryRange.min}-{salaryRange.max} {salaryRange.currency} </span></p>
                <Link to={`/jobs/${_id}`}>
                    <button className="bg-gradient-to-r from-blue-200 to-blue-400 text-white py-2 px-4 rounded-md mt-3">Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HotjobCard;