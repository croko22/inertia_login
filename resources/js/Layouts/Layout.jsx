import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header class="z-50 flex flex-wrap w-full md:justify-start md:flex-nowrap py-7">
                <nav
                    class="relative flex flex-wrap items-center w-full px-4 mx-auto max-w-7xl md:grid md:grid-cols-12 basis-full md:px-6"
                    aria-label="Global"
                >
                    <div class="md:col-span-3">
                        <Link
                            class="flex items-center text-xl font-semibold rounded-xl focus:outline-none focus:opacity-80"
                            href="/"
                        >
                            <svg
                                class="w-10 h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>

                            <span>Inertia</span>
                        </Link>
                    </div>

                    <div class="flex items-center py-1 gap-x-2 ms-auto md:ps-6 md:order-3 md:col-span-3">
                        <Link href="/login" class="button-auth">
                            Log in
                        </Link>
                    </div>

                    <div class="row md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
                        <div class="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0"></div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
