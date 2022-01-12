module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "neutral-1": "#fbfcfd",
      "neutral-2": "#f8f9fa",
      "neutral-3": "#f1f3f5",
      "neutral-4": "#eceef0",
      "neutral-5": "#e6e8eb",
      "neutral-6": "#dfe3e6",
      "neutral-7": "#d7dbdf",
      "neutral-8": "#c1c8cd",
      "neutral-9": "#889096",
      "neutral-10": "#7e868c",
      "neutral-11": "#687076",
      "neutral-12": "#11181c",
      "sky-1": "#f9feff",
      "sky-2": "#f1fcff",
      "sky-3": "#e4f9ff",
      "sky-4": "#d5f4fd",
      "sky-5": "#c1ecf9",
      "sky-6": "#a4dff1",
      "sky-7": "#79cfea",
      "sky-8": "#2ebde5",
      "sky-9": "#68ddfd",
      "sky-10": "#5fd4f4",
      "sky-11": "#0078a1",
      "sky-12": "#003242",
      "neutral-dark-1": "#151718",
      "neutral-dark-2": "#1a1d1e",
      "neutral-dark-3": "#202425",
      "neutral-dark-4": "#26292b",
      "neutral-dark-5": "#2b2f31",
      "neutral-dark-6": "#313538",
      "neutral-dark-7": "#3a3f42",
      "neutral-dark-8": "#4c5155",
      "neutral-dark-9": "#697177",
      "neutral-dark-10": "#787f85",
      "neutral-dark-11": "#9ba1a6",
      "neutral-dark-12": "#ecedee",
      "sky-dark-1": "#0c1820",
      "sky-dark-2": "#071d2a",
      "sky-dark-3": "#082636",
      "sky-dark-4": "#082d41",
      "sky-dark-5": "#08354c",
      "sky-dark-6": "#083e59",
      "sky-dark-7": "#064b6b",
      "sky-dark-8": "#005d85",
      "sky-dark-9": "#68ddfd",
      "sky-dark-10": "#8ae8ff",
      "sky-dark-11": "#2ec8ee",
      "sky-dark-12": "#eaf8ff",
      "success-9": "#46a758",
      "success-10": "#3d9a50",
      "success-dark-9": "#46a758",
      "success-dark-10": "#55b467",
      "error-9": "#e5484d",
      "error-10": "#dc3d43",
      "error-dark-9": "#e5484d",
      "error-dark-10": "#f2555a",
    },
    fontFamily: {
      serif: [],
      mono: [],
      sans: [
        "Hind Madurai",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      display: "3.25rem", // 52px
      h1: "2.75rem", // 44px
      h2: "2.25rem", // 36px
      h3: "2rem", // 32px
      h4: "1.75rem", // 28px
      h5: "1.5rem", // 24px
      h6: "1.25rem", // 20px
      "base-lg": "1.125rem", // 18px
      base: "1rem", // 16px
      small: "0.875rem", // 14px
      tiny: "0.75rem", // 12px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeight: {
      display: "3.75rem", // 60px
      h1: "3.25rem", // 52px
      h2: "2.75rem", // 44px
      h3: "2.25rem", // 36px
      h4: "1.75rem", // 28px
      h5: "1.5rem", // 24px
      h6: "1.5rem", // 24px
      "base-lg": "1.5rem", // 24px
      base: "1.5rem", // 24px
      small: "1rem", // 16px
      tiny: "0.75rem", // 12px
    },
    screens: {
      tablet: "768px",
      desktop: "1200px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
