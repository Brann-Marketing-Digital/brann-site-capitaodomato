// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Site 100% estático, sem adapter (deploy no Cloudflare Pages).
  // As URLs não têm barra final nem .html (/contato, /nossa-historia).
  // Domínio próprio (public/CNAME): a base é sempre "/". ASTRO_BASE só serve
  // para testar no endereço github.io (ex.: ASTRO_BASE=/brann-site-capitaodomato).
  base: process.env.ASTRO_BASE || "/",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
