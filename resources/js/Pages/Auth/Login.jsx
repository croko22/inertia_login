import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
        post("/login");
    }

    return (
        <div className="flex flex-col items-center gap-5 font-sans antialiased ">
            <h2 className="text-center">Login</h2>
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
                    {errors.email && <div>{errors.email}</div>}
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
                    <Link
                        href="{{ route('password.request') }}"
                        className="link"
                    >
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
