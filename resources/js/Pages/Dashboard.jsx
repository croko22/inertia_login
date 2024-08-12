import { useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";

export default function Dashboard() {
    const { auth } = usePage().props;
    const [user, setUser] = useState(auth.user);
    const [name, setName] = useState(user ? user.name : name);
    const [email, setEmail] = useState(user ? user.email : email);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put("user", { name, email })
            .then((response) => {
                setUser(response.data);
                setMessage("Profile updated successfully!");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
            .catch((error) => {
                console.error(
                    "There was an error updating the profile!",
                    error
                );
                setMessage("Failed to update profile.");
            });
        setUser({ ...user, name, email });
    };

    return (
        <div>
            <h1 className="text-center">Dashboard</h1>

            <div className="my-5 text-center">
                <p>Welcome back, {name}!</p>
                <p>Your email address is {email}.</p>
            </div>

            <h2 className="text-center">Update Profile</h2>

            {message && (
                <p className="text-center text-green-500 ">{message}</p>
            )}

            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="button-primary">
                    Update Profile
                </button>
            </form>
        </div>
    );
}
