export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        elevateBg: "#030712",
        elevateBg2: "#060D1F",
        surface: "#0C1426",
        cyanx: "#22D3EE",
        cyanx2: "#06B6D4",
        bluex: "#3B82F6",
        violetx: "#8B5CF6",
        textx: "#E2E8F0",
        mutedx: "#64748B",
        lightx: "#F8FAFC",
      },
      boxShadow: {
        cyan: "0 0 30px rgba(34,211,238,.22)",
        cyanStrong: "0 0 55px rgba(34,211,238,.38)",
      }
    },
  },
  plugins: [],
};
