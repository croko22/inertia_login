import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Login() {
    const { data, post, setData } = useForm({
        email: "",
        password: "",
        device_name: "browser",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            // await axios.get("http://localhost:8000/sanctum/csrf-cookie");

            // const response = await axios.post(
            //     "http://localhost:8000/api/v1/login",
            //     data,
            //     {
            //         headers: {
            //             "Content-Type": "application/json",
            //             "X-CSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            //         },
            //     }
            // );

            // const result = response.data;
            // Cookies.set("token", result.data.token, { expires: 7 });
            // axios.defaults.headers.common[
            //     "Authorization"
            // ] = `Bearer ${result.data.token}`;

            post("/login");
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-5 font-sans antialiased ">
            <h2 className="text-center">Login</h2>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <form className="mt-6" onSubmit={submit}>
                <div className="mb-5">
                    <label htmlFor="email" className="label">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="input"
                        placeholder="john@doe.com"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="label">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <div className="flex items-center justify-between gap-5">
                    <Link href="#" className="link">
                        Forgot your password?
                    </Link>
                    <button type="submit" className="button-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
