import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                berry: "var(--berry-punch)",
                gold: "var(--golden-saffron)",
                surface: "var(--surface)",
                "surface-light": "var(--surface-light)",
                muted: "var(--muted)",
                ribbon: "var(--ribbon)",
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'sans-serif'],
                display: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
};
export default config;
