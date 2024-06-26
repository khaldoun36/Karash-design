export default defineNuxtConfig({
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
        '@pinia/nuxt',
    ],

    // swiper: {
    //     // Swiper options
    //     //----------------------
    //     // prefix: 'Swiper',
    //     // styleLang: 'css',
    //     // modules: ['navigation', 'pagination'], // all modules are imported by default
    // },

    // Internationalization Routing Options
    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_except_default',
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
        defaultLocale: 'en',
    },

    // Render rules — pre-render ahead of time
    // routeRules: {
    //     '/': { prerender: true },
    //     '/about-us': { prerender: true },
    //     '/after-sale': { prerender: true },
    //     '/contact-us': { prerender: true },
    // },
});
