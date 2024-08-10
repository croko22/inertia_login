import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        document.title = "Dashboard - React App";
        axios
            .get("http://localhost:8000/api/v1/user")
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the user data!",
                    error
                );
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/v1/user", { name, email })
            .then((response) => {
                setUser(response.data);
                setMessage("Profile updated successfully!");
            })
            .catch((error) => {
                console.error(
                    "There was an error updating the profile!",
                    error
                );
                setMessage("Failed to update profile.");
            });
    };

    return (
        <div>
            <h1 className="text-center">Dashboard</h1>

            {user ? (
                <div className="my-5 text-center">
                    <p>Welcome back, {user.name}!</p>
                    <p>Your email address is {user.email}.</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}

            <h2 className="text-center">Update Profile</h2>

            {message && <p className="text-center">{message}</p>}

            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}
