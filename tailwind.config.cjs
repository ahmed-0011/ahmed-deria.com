/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontSize: {
            xs: "0.6rem",
            sm: "0.8rem",
            base: "18px",
            "base-mobile": "16px",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.5rem"
        },
        extend: {
            colors: {
                white: "#FFF",
                gray: "#F7F9FA",
                primary: "#5486E3",
                secondary: "#e7f0ff",
                selection: "#D4E2FA",
                footer: "#F0F2F5",
                black: {
                    100: "#262A2E",
                    200: "#12161A"
                },
                separator: "#e3e5e6",
                "social-link": "#748199",
                "social-link-hover": "#272B33"
            },
            maxWidth: {
                "6xl": "1280px"
            },
            spacing: {
                1: "0.25em",
                2: "0.5em",
                3: "0.75em",
                4: "1em",
                5: "1.25em",
                6: "1.5em",
                7: "1.75em",
                8: "2em",
                9: "2.25em",
                10: "2.5em",
                11: "2.75em",
                12: "3em",
                13: "3.25em",
                14: "3.5em",
                15: "3.75em",
                16: "4em",
                17: "4.25em",
                18: "4.5em",
                19: "4.75em",
                20: "5em",
                28: "7em"
            },
            borderRadius: {
                sm: "2px",
                md: "6px",
                lg: "8px"
            },
            inset: {
                "1/5": "22%"
            },
            screens: {
                sm: "375px",
                md: "768px",
                lg: "1280px",
                xl: "1440px"
            },
            boxShadow: {
                card: "0px 1px 15px 3px rgba(75, 75, 75, 0.15), 0px 3px 4px 1px rgba(0, 0, 0, 0.05)"
            }
        }
    },
    plugins: []
};
