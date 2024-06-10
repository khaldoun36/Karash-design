export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
    ],

    // Render rules — pre-render ahead of time
    routeRules: {
        '/': { prerender: true },
        '/about-us': { prerender: true },
        '/after-sale': { prerender: true },
        '/contact-us': { prerender: true },
    },
});
