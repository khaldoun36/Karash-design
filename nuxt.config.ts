export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/content',
    ],

    // Internationalization Routing Options
    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix',
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

    vue: {
        compilerOptions: {
            isCustomElement: (tag) =>
                ['swiper-container', 'swiper-slide'].includes(tag),
        },
    },

    hooks: {
        'pages:extend'(pages) {
            const pagesToRemove: NuxtPage[] = [];
            pages.forEach((page) => {
                if (page.path.includes('component')) pagesToRemove.push(page);
            });

            pagesToRemove.forEach((page: NuxtPage) => {
                pages.splice(pages.indexOf(page), 1);
            });
        },
    },

    components: [
        '~/components',
        {
            path: '~/pages',
            pattern: '*/components/**',
            pathPrefix: false,
        },
    ],
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
        },
    },
});
