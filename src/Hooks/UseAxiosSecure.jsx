import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        console.log('requst by interceptors')
        return config
    }, function (error) {

        // Do something with request error
        return Promise.reject(error);
    }
    )
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, (error) => {
        const status = error.response.status;
        console.log(status)
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default UseAxiosSecure;