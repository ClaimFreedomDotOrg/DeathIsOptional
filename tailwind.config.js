/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "forge-orange": "#FF6B35",
        "forge-amber": "#FFB800",
        "forge-red": "#E63946",
        "forge-steel": "#2D3142",
        "forge-iron": "#1A1D2E",
        "forge-slate": "#8896A8",
        "forge-white": "#F5F5F5",
        "forge-green": "#06D6A0",
        "forge-rust": "#C1440E",
      },
      animation: {
        "forge-pulse": "forge-pulse 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
        "heat-shimmer": "heat-shimmer 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "forge-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px #FF6B35, 0 0 10px #FF6B35" },
          "50%": {
            boxShadow: "0 0 20px #FF6B35, 0 0 40px #FF6B35, 0 0 60px #FF6B35",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "heat-shimmer": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
