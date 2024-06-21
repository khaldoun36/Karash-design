export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
    ],

    // Internationalization Routing Options
    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix',
        locales: [
            {
                code: 'en-US',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.json',
            },
            {
                code: 'ar-IQ',
                iso: 'ar-IQ',
                name: 'العربية',
                file: 'ar-IQ.json',
            },
            {
                code: 'ku',
                iso: 'ku',
                name: 'کوردی',
                file: 'ku.json',
            },
            {
                code: 'tr',
                iso: 'tr',
                name: 'Türkçe',
                file: 'tr.json',
            },
        ],
        defaultLocale: 'en-US',
    },

    // Render rules — pre-render ahead of time
    routeRules: {
        '/': { prerender: true },
        '/about-us': { prerender: true },
        '/after-sale': { prerender: true },
        '/contact-us': { prerender: true },
    },
});
