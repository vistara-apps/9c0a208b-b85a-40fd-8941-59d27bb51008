import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(210 40% 96.1%)",
        foreground: "hsl(220 46.9% 44.9%)",
        muted: "hsl(220 46.9% 44.9%)",
        accent: "hsl(262.1 83.3% 54.9%)",
        border: "hsl(220 13% 88%)",
        primary: "hsl(220 89.9% 51.2%)",
        surface: "hsl(0 0% 100%)",
        destructive: "hsl(0 65.9% 52.9%)",
      },
      borderRadius: {
        lg: "16px",
        md: "10px",
        sm: "6px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 4px 12px hsla(220, 13%, 20%, 0.1)",
        modal: "0 12px 28px hsla(220, 13%, 20%, 0.16)",
      },
      spacing: {
        lg: "20px",
        md: "12px",
        sm: "8px",
        xl: "32px",
        xs: "4px",
      },
      fontSize: {
        body: ["1rem", { lineHeight: "1.75rem" }],
        caption: ["0.875rem", { lineHeight: "1rem", fontWeight: "500" }],
        display: ["2.25rem", { lineHeight: "1", fontWeight: "700" }],
        heading: ["1.5rem", { lineHeight: "1.333", fontWeight: "600" }],
      },
      animation: {
        "fade-in": "fadeIn 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
        "slide-up": "slideUp 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)",
        "scale-in": "scaleIn 0.15s cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

