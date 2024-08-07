import { Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div class="relative">
            <div class="relative z-10">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="max-w-2xl mt-5">
                            <h1 class="block text-4xl font-semibold text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200">
                                Inertia
                            </h1>
                        </div>
                        <div class="max-w-3xl mt-5">
                            <p class="text-lg text-gray-600 dark:text-neutral-400">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad.
                            </p>
                        </div>

                        <div class="flex justify-center gap-3 mt-8">
                            <Link
                                class="inline-flex items-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                href="login"
                            >
                                Get Started
                                <svg
                                    class="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
