import type { UserConfigExport } from "vite";

export default (): UserConfigExport => {
	return {
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
