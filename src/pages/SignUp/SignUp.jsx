import Lottie from "lottie-react";
import lotiReg from '../../assets/register.json'
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('');
    const { updateNamePhoto, CreateUser, handleGoogle } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const frm = e.target;
        const name = frm.name.value;
        const photo = frm.photo.value;
        const email = frm.email.value;
        const password = frm.password.value;
        const anewUser = { name, photo, email, password };
        console.log(anewUser)

        // Password Validation Start
        if (password.length < 6) {
            setError("Password must contain at least 6 characters")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter")
            return;
        }
        // Password Validation End

        CreateUser(email, password)
            .then(res => {
                console.log(res)
                updateNamePhoto({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Successfully SIgnUp",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from)
                    })
                    .catch(error => {
                        setError(error)
                    })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    };

    const handlwGooogleSignin = () => {
        handleGoogle()
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Successfully Google SignUp",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(errro => {
                console.log(errro.message)
                setError(errro.message)
            })
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-96">

                    <Lottie animationData={lotiReg}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Sign Up now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : "password"} name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">SignUp</button>
                        </div>
                    </form>
                    <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[415px] right-9'>
                        {
                            showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                        }
                    </button>
                    <div className="divider">or</div>
                    <button onClick={handlwGooogleSignin} className='btn w-8/12 ml-8 mb-8'><FcGoogle size={30} />SignUp With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;