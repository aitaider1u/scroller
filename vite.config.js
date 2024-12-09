import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Import du plugin React

export default defineConfig({
  base: '/scroller/', // Chemin de base pour GitHub Pages
  plugins: [react()], // Ajout du plugin à la configuration
});
