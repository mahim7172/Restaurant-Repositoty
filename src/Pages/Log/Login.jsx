import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import loginImg from '../../assets/others/authentication.gif';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const Login = () => {

    // const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    // console.log("state in the location ", location?.state)
    console.log(from)


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    title: "login successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                const message = err.message;
                console.log(message);
            })
    }

    const handleValidet = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }

    return (
        <div>
            <Helmet>
                <title>Returent | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleValidet}
                                    type="text"
                                    name="captcha"
                                    // ref={captchaRef}
                                    placeholder="type the captcha"
                                    className="input input-bordered"
                                    required />

                            </div>
                            <div className="form-control mt-6">
                                <input
                                    disabled={disabled}
                                    value="Login"
                                    type="submit"
                                    className="btn btn-primary" />
                            </div>
                            <p>New Here ? Create an account <Link className="text-lg font-semibold text-sky-500 hover:underline" to="/register">Register</Link></p>
                        </form>

                        <div className=" flex gap-4 justify-center mb-3 ">
                            <SocialLogin></SocialLogin>
                            <div className="border-l-2" > </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;