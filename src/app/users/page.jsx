import { Suspense } from "react";
import Users from "../components/Users";

const usersPromise = async() => {
    const data = await fetch("http://localhost:5000/users");
    return data.json();
};

const UsersPage = () => {
    
    return (
        <div>
            <h2>Users Data are coming soon:</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Users usersPromise={usersPromise}></Users>
            </Suspense>
        </div>
    );
};

export default UsersPage;