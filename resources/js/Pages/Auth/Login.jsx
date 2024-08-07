import { Link } from "@inertiajs/react";

export default function Login() {
    return (
        <div className="container mx-auto text-blue-400">
            <h2 class="text-center">Login</h2>
            <form class="mt-6">
                <div class="mb-5">
                    <label for="email" class="label">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="input"
                        placeholder="john@doe.com"
                    />
                </div>
                <div class="mb-5">
                    <label for="password" class="label">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="input"
                        required
                    />
                </div>
                <div class="flex items-center justify-between gap-5">
                    <Link href="{{ route('password.request') }}" class="link">
                        Forgot your password?
                    </Link>
                    <button type="submit" class="button-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
