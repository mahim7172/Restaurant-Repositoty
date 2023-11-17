// import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import registerImg from '../../assets/others/authentication.gif';

// import { AuthContext } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)
    // const { creatUser } = useContext(AuthContext)


    // const handleRegister = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    //     creatUser(email, password)
    //         .then(res => {
    //             const user = res.user;
    //             console.log(user);
    //         })
    //         .catch(err => {
    //             const message = err.message;
    //             console.log(message);
    //         })
    // }


    return (
        <div>
            <Helmet>
                <title>Returent | Register</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="name"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                {errors.password?.type === "required" && (
                                    <p className="text-orange-800">Password is required</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input

                                    value="Register"
                                    type="submit"
                                    className="btn btn-primary" />
                            </div>
                            <p>Already have an account <Link className="text-lg font-semibold text-sky-500 hover:underline" to="/login">Login</Link> Please</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;