export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
        '@pinia/nuxt',
    ],

    // Internationalization Routing Options
    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.json',
                dir: 'ltr',
            },
            {
                code: 'ar',
                iso: 'ar-IQ',
                name: 'العربية',
                file: 'ar-IQ.json',
                dir: 'rtl',
            },
            {
                code: 'ku',
                iso: 'ku',
                name: 'کوردی',
                file: 'ku.json',
                dir: 'rtl',
            },
            {
                code: 'tr',
                iso: 'tr',
                name: 'Türkçe',
                file: 'tr.json',
                dir: 'ltr',
            },
        ],
        defaultLocale: 'en-US',
    },

    // Render rules — pre-render ahead of time
    // routeRules: {
    //     '/': { prerender: true },
    //     '/about-us': { prerender: true },
    //     '/after-sale': { prerender: true },
    //     '/contact-us': { prerender: true },
    // },
});
