import js from "@eslint/js"
export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        rules: {
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],
            "no-undef": "off",
            "no-console": "off",
            "comma-dangle": ["error", "never"]
        }
    }
]
