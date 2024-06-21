<template>
    <section class="grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
        <div class="flex flex-col items-start justify-between">
            <h2 class="text-3xl font-semibold text-secondary-50 lg:text-5xl">
                {{ $t('home_about.title') }}
            </h2>
            <SocialLinks class="hidden lg:flex" />
        </div>
        <div class="space-y-8">
            <p class="text-base text-secondary-400 lg:text-lg">
                {{ $t('home_about.description_1') }}
            </p>
            <AchievementsGrid />
            <p class="text-base text-secondary-400 lg:text-lg">
                {{ $t('home_about.description_2') }}
            </p>
        </div>
        <SocialLinks class="flex lg:hidden" />
    </section>
</template>

<script setup>
import SocialLinks from '~/components/base/SocialLinks.vue';
import AchievementsGrid from '~/components/home/AchievementsGrid.vue';
</script>

<style scoped></style>
