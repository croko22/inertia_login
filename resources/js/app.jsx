import "./bootstrap";
import "../scss/app.scss";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "@/Layouts/Layout";
import axios from "axios";
import Cookies from "js-cookie";
// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
// axios.defaults.baseURL = "http://localhost:8000/api/v1";

if (Cookies.get("token")) {
    console.log(Cookies.get("token"));
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "token"
    )}`;
}

// if (Cookies.get("XSRF-TOKEN")) {
//     axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
// } else {
//     axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
//         console.log(response);
//     });
// }

createInertiaApp({
    title: (title) =>
        title ? `${title} - Laravel Inertia React` : "Laravel Inertia React",
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#fff",
        showSpinner: true,
    },
});
