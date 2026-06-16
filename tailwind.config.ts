import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "plane-fly": {
          "0%": {
            transform: "translate(0, 0) rotate(8deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "0.65",
          },
          "15%": {
            transform: "translate(12vw, -18px) rotate(4deg)",
            opacity: "0.75",
          },
          "28%": {
            transform: "translate(26vw, 10px) rotate(11deg)",
            opacity: "0.8",
          },
          "42%": {
            transform: "translate(41vw, -22px) rotate(3deg)",
            opacity: "0.75",
          },
          "55%": {
            transform: "translate(55vw, 8px) rotate(13deg)",
            opacity: "0.7",
          },
          "68%": {
            transform: "translate(68vw, -16px) rotate(5deg)",
            opacity: "0.65",
          },
          "80%": {
            transform: "translate(80vw, 12px) rotate(10deg)",
            opacity: "0.55",
          },
          "92%": {
            transform: "translate(92vw, -8px) rotate(7deg)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(110vw, 4px) rotate(9deg)",
            opacity: "0",
          },
        },
        "plane-drift": {
          "0%":   { transform: "translate(0, 0) rotate(8deg)", opacity: "0" },
          "5%":   { opacity: "0.55" },
          "20%":  { transform: "translate(18vw, -14px) rotate(3deg)" },
          "40%":  { transform: "translate(38vw, 12px) rotate(12deg)" },
          "60%":  { transform: "translate(58vw, -18px) rotate(4deg)" },
          "80%":  { transform: "translate(78vw, 8px) rotate(10deg)", opacity: "0.4" },
          "95%":  { opacity: "0" },
          "100%": { transform: "translate(105vw, -4px) rotate(7deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "plane-fly": "plane-fly var(--plane-duration, 12s) cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
        "plane-drift": "plane-drift 4s ease-in-out infinite",
        "spin-slow": "spin-slow 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
