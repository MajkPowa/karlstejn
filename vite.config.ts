import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({base:"/karlstejn/",plugins:[react()],build:{rollupOptions:{input:{main:"index.html",privacy:"ochrana-soukromi.html"}}}});
