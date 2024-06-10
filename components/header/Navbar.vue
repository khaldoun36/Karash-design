<template>
    <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
            v-for="link in navLinks"
            :to="link.slug"
            :key="link.text"
            class="text-sm font-semibold text-secondary-400 transition-colors hover:text-secondary-100"
            >{{ link.text }}</NuxtLink
        >
        <div
            class="h-6 w-[1.5px] bg-zinc-400"
            aria-hidden="true"
            aria-label="decorative"
            orientation="vertical"
        ></div>
        <!-- <HeaderLangDropdown /> -->
        <BaseButtonLink class="primary hidden lg:flex" to="/contact-us"
            >Contact us</BaseButtonLink
        >
    </nav>
</template>

<script setup>
import navLinks from '~/data/navLinks.json';
</script>

<style scoped></style>
