import UseAuth from "../../../Hooks/UseAuth";

const AdminHome = () => {
    const { user } = UseAuth()
    return (
        <div>
            <h2 className="text-2xl ">Hi😊 Welcome {user?.displayName ? user.displayName : "Back"}   </h2>

        </div>
    );
};

export default AdminHome;