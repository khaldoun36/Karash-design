<template>
    <footer class="full-width content-grid">
        <div
            class="footer-layout flex flex-col items-center justify-between gap-8 border-t border-white/10 py-6 md:flex-row"
        >
            <NuxtLink to="/">
                <NuxtImg
                    src="layer-1.svg"
                    alt="website's logo"
                    width="7118"
                    height="2563"
                    class="h-8 max-w-min"
                />
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
</script>

<style scoped></style>
