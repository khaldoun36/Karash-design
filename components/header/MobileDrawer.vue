<template>
    <nav
        :class="{ 'mobile-nav': true, active: store.menuActive }"
        class="fixed inset-0 -z-10 flex h-0 w-full flex-col items-start justify-start gap-10 overflow-clip bg-secondary-800/60 backdrop-blur transition-all duration-700 md:hidden"
    >
        <NuxtLink
            v-for="link in navLinks"
            :to="localePath(link.slug)"
            :key="link.text"
            class="w-full -translate-y-20 pl-4 text-xl font-medium text-secondary-100 opacity-0 transition-all delay-100 duration-500 first-of-type:mt-28"
            @click="store.toggleMenu"
        >
            {{ link.text }}
        </NuxtLink>
    </nav>
</template>

<script setup>
import navLinks from '~/data/navLinks.json';
import { useRouter } from 'vue-router';

import { useIsMenuActive } from '~/stores/isMenuActive.js';

const store = useIsMenuActive();

const localePath = useLocalePath();

const props = defineProps(['isMenuActive']);
const menuActive = ref(props.isMenuActive);
const router = useRouter();

watch(
    () => props.isMenuActive,
    (newValue) => {
        menuActive.value = newValue;
    }
);

onMounted(() => {
    if (props.isMenuActive) {
        menuActive.value = true;
    }
});
</script>

<style scoped>
.mobile-nav {
    transform: translateZ(0); /* Force hardware acceleration */
    transition:
        height 0.7s ease,
        backdrop-filter 0.7s ease;
    backdrop-filter: blur(0); /* Initial state */
}

.mobile-nav.active {
    height: 100vh;
    backdrop-filter: blur(10px); /* Apply blur when active */
}

.mobile-nav a {
    transform: translateY(0);
    opacity: 0;
    transition:
        transform 0.5s ease,
        opacity 0.5s ease;
}

.mobile-nav.active a {
    transform: translateY(80px);
    opacity: 1;
}
</style>
