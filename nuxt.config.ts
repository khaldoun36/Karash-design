// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'radix-vue/nuxt',
        '@nuxt/image',
    ],

    //     Render rules
    // routeRules: {
    //     // Homepage pre-rendered at build time
    //     './': { prerender: true },
    //     './about-us': { prerender: true },
    //     './after-sale': { prerender: true },
    //     './contact-us': { prerender: true },
    // },
});
