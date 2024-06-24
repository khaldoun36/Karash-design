<template>
    <footer
        class="flex flex-col items-center justify-between gap-8 border-t border-white/10 py-6 md:flex-row"
    >
        <NuxtLink :to="localePath(`/`)" class="w-min overflow-clip">
            <KarashLogo class="max-w-min" />
        </NuxtLink>

        <p class="text-base font-medium text-secondary-400">
            All rights reserved &copy; {{ new Date().getFullYear() }}
        </p>
        <SocialLinks size="32px" />
    </footer>
</template>

<script setup>
import SocialLinks from '~/components/base/SocialLinks.vue';
import KarashLogo from '~/components/base/KarashLogo.vue';

const localePath = useLocalePath();
</script>

<style scoped></style>
