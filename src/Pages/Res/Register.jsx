
import { Helmet } from "react-helmet-async";
import registerImg from '../../assets/others/authentication.gif';

// import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { creatUser, updateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (data) => {

        // console.log(data.email, data.password, data.photoURL)
        creatUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                updateProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile updated')
                        // const userInfo = {
                        //     name: data.name,
                        //     email: data.email

                        // }
                        // console.log(userInfo)
                        // axiosPublic.post('/users', userInfo)
                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             console.log('user add hoise')
                        //             reset()
                        //             Swal.fire({
                        //                 position: "top-end",
                        //                 icon: "success",
                        //                 title: "Your work has been saved",
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //             navigate('/')

                        //         }
                        //     })


                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log('user error ', err.message, err.code)

            })
        // console.log('user profile updated')
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password

        }

        axiosPublic.post('/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    // console.log('user add hoise')
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')

                }
            })

    }


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
                                    {...register("name", {
                                        required: true
                                    })}
                                    type="name"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    {...register("photoURL", {
                                        required: true
                                    })}
                                    type="photoURL"
                                    name="photoURL"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", {
                                        required: true
                                    })}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).+$/
                                    })}
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-orange-800">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-orange-800">Password must be 6 chacters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-orange-800">Password must be less then 20 chacters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-orange-800">It must contain at least one uppercase letter, one lowercase letter and one special character</p>
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

                        <div className=" flex gap-4 justify-center mb-3 ">
                            <SocialLogin></SocialLogin>
                            <div className="border-l-2" > </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;