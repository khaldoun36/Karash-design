<template>
    <nav
        class="mobile-nav ml-auto flex items-center gap-8"
        :class="{ active: store.menuActive }"
    >
        <NuxtLink
            v-for="link in navLinks"
            :to="localePath(link.slug)"
            :key="link.text"
            class="text-sm font-semibold text-secondary-400 transition-colors hover:text-secondary-100"
            @click="store.toggleMenu"
            >{{ link.text }}</NuxtLink
        >
    </nav>
</template>

<script setup>
const localePath = useLocalePath();

const navLinks = [
    { slug: '/', text: 'Home' },
    { slug: '/', text: 'Projects' },
    { slug: '/', text: 'Products and services' },
    { slug: '/about-us', text: 'About us' },
    { slug: '/after-sale', text: 'After sale' },
];

import { useIsMenuActive } from '~/stores/isMenuActive.js';

const store = useIsMenuActive();
</script>

<style scoped>
@media screen and (max-width: 1024px) {
    .mobile-nav {
        position: fixed;
        overflow: hidden;
        inset: 0;
        height: 0;
        flex-direction: column;
        gap: theme('spacing.10');
        align-items: start;
        /* justify-content: center; */
        justify-content: start;
        background-color: theme('colors.secondary.800/60%');
        backdrop-filter: blur(theme('backdropBlur.md'));

        /* Transition CSS */
        transform: translateZ(0); /* Force hardware*/
        transition:
            height 0.7s ease,
            backdrop-filter 0.7s ease;
        transition: all;
        transition-duration: 700ms;
    }

    .mobile-nav.active {
        height: 100vh;
    }

    .mobile-nav a {
        width: 100%;
        padding-inline: theme('spacing.8');
        font-size: theme('fontSize.xl');
        font-weight: theme('fontWeight.medium');
        color: theme('colors.secondary.100');

        transform: translateY(0);
        opacity: 0;

        transition:
            transform 0.5s ease,
            opacity 0.5s ease;
        transition-delay: 100ms;
    }

    .mobile-nav a:first-of-type {
        margin-top: theme('spacing.28');
    }

    .mobile-nav.active a {
        transform: translateY(80px);
        opacity: 1;
    }
}

@media screen and (max-width: 768px) {
    .mobile-nav a {
        padding-inline: theme('spacing.4');
    }
}
</style>
