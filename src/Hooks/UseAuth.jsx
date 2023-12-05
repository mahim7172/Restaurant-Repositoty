import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UseAuth;