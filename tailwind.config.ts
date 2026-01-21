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
            transform: "translate(0, 0) rotate(var(--plane-rotate, 15deg)) scale(1)",
            opacity: "0.6",
          },
          "10%": {
            transform: "translate(40px, -8px) rotate(calc(var(--plane-rotate, 15deg) - 2deg)) scale(1.02)",
            opacity: "0.7",
          },
          "20%": {
            transform: "translate(90px, -2px) rotate(calc(var(--plane-rotate, 15deg) + 1deg)) scale(1)",
            opacity: "0.8",
          },
          "35%": {
            transform: "translate(160px, -12px) rotate(calc(var(--plane-rotate, 15deg) - 3deg)) scale(1.05)",
            opacity: "0.75",
          },
          "50%": {
            transform: "translate(250px, -5px) rotate(var(--plane-rotate, 15deg)) scale(1)",
            opacity: "0.85",
          },
          "65%": {
            transform: "translate(340px, -15px) rotate(calc(var(--plane-rotate, 15deg) - 4deg)) scale(1.03)",
            opacity: "0.7",
          },
          "80%": {
            transform: "translate(450px, -3px) rotate(calc(var(--plane-rotate, 15deg) + 1deg)) scale(1)",
            opacity: "0.6",
          },
          "90%": {
            transform: "translate(520px, -10px) rotate(calc(var(--plane-rotate, 15deg) - 2deg)) scale(1.02)",
            opacity: "0.4",
          },
          "100%": {
            transform: "translate(600px, -2px) rotate(var(--plane-rotate, 15deg)) scale(1)",
            opacity: "0",
          },
        },
        "plane-drift": {
          "0%, 100%": {
            transform: "translateY(0) rotate(var(--plane-rotate, 15deg))",
          },
          "25%": {
            transform: "translateY(-5px) rotate(calc(var(--plane-rotate, 15deg) - 1deg))",
          },
          "50%": {
            transform: "translateY(3px) rotate(calc(var(--plane-rotate, 15deg) + 0.5deg))",
          },
          "75%": {
            transform: "translateY(-7px) rotate(calc(var(--plane-rotate, 15deg) - 1.5deg))",
          },
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
