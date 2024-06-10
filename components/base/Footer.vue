<template>
    <footer class="full-width content-grid">
        <div
            class="footer-layout flex flex-col items-center justify-between gap-8 border-t border-white/10 py-6 md:flex-row"
        >
            <NuxtLink to="/">
                <KarashLogo />
            </NuxtLink>

            <p class="text-base font-medium text-secondary-400">
                All rights reserved &copy; {{ new Date().getFullYear() }}
            </p>
            <SocialLinks size="32px" />
        </div>
    </footer>
</template>

<script setup>
import SocialLinks from '~/components/base/SocialLinks.vue';
import KarashLogo from '~/components/base/KarashLogo.vue';
</script>

<style scoped></style>
