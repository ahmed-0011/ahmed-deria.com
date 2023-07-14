import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    base: "./",
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: assetInfo => {
                        let extType = assetInfo.name.split(".").at(1);
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = "images";
                        }

                        return `_astro/${extType}/[name].[hash][extname]`;
                    }
                }
            }
        },
        resolve: {
            alias: [
                { find: "@", replacement: path.resolve(__dirname, "./src") },
                { find: "@components", replacement: path.resolve(__dirname, "./src/components") }
            ]
        }
    }
});
