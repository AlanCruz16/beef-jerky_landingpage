import js from "@eslint/js";

export default [
    {
        ignores: [".next/**", "node_modules/**"]
    },
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-console": ["warn", { allow: ["warn", "error"] }]
        }
    }
];
