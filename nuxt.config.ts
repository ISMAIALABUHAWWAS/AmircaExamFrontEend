// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        // Private environment variables are available only on the server-side
        s3Bucket: process.env.S3_BUCKET, // Keep this private if it's sensitive
        // publicRuntimeConfig is for variables that should be available to the client
        public: {
            API_BASE_URL: process.env.S3_BUCKET || "http://localhost:8000/", // Fallback URL for public access
        },
    },

    ssr: false,

    app: {
        head: {
            title: "View Academy QBank",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Nuxt Argon Dashboard 2 PRO by Creative Tim",
                },
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.png",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
                },
            ],
            script: [
                {
                    type: "text/javascript",
                    src: "https://kit.fontawesome.com/42d5adcbca.js",
                    async: true,
                },
                {
                    type: "text/javascript",
                    src: "https://buttons.github.io/buttons.js",
                    async: true,
                },
            ],
        },
    },

    components: true,
    imports: {
        autoImport: true,
    },

    css: [
        "@/assets/css/nucleo-svg.css",
        "@/assets/css/nucleo-icons.css",
        "@/assets/scss/argon-dashboard.scss",
    ],

    modules: ["@pinia/nuxt"],
});
