// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxt/eslint'],
	css: ['~/assets/css/main.css'],
	hooks: {
		'prerender:routes'({ routes }) {
			routes.clear(); // Не создает никаких маршрутов (кроме значений по умолчанию)
		},
	},
	spaLoadingTemplate: 'spa-loading-template.html',
});
