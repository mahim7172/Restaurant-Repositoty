import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { google } = UseAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSign = () => {
        google()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)

                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <div>
                <button className="btn" onClick={handleGoogleSign}><FcGoogle></FcGoogle> Google </button>
            </div>
        </div>
    );
};

export default SocialLogin;