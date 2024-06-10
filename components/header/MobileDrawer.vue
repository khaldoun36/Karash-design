<template>
    <nav
        class="mobile-nav fixed inset-0 -z-10 flex h-0 w-full flex-col items-start justify-start gap-10 overflow-clip bg-secondary-800/50 backdrop-blur-md transition-all duration-700 md:hidden"
        :class="{ active: isMenuActive }"
    >
        <NuxtLink
            v-for="link in navLinks"
            :to="link.slug"
            :key="link.text"
            class="w-full -translate-y-20 pl-4 text-xl font-medium text-secondary-100 opacity-0 transition-all delay-100 duration-500 first-of-type:mt-28"
            >{{ link.text }}</NuxtLink
        >
    </nav>
</template>

<script setup>
import navLinks from '~/data/navLinks.json';

const props = defineProps(['isMenuActive']);
</script>

<style scoped>
.mobile-nav.active {
    height: 100vh;
}
.mobile-nav.active a {
    transform: translateY(80px);
    opacity: 1;
}
</style>
