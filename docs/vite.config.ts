import UnoCSS from 'unocss/vite'
import type { UserConfigExport } from "vite";


export default (): UserConfigExport => {
	return {
    plugins: [
      UnoCSS(),
    ],
		server: {
			port: 1216
		},
		optimizeDeps: {
			exclude: ["vitepress"]
		},
		build: {
			chunkSizeWarningLimit: 10000
		}
	};
};
