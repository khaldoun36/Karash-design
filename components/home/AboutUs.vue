<template>
    <section class="grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
        <div class="flex flex-col items-start justify-between">
            <h2 class="text-3xl font-semibold text-secondary-50 lg:text-5xl">
                About us
            </h2>
            <SocialLinks class="hidden lg:flex" />
        </div>
        <div class="space-y-8">
            <p class="text-base text-secondary-400 lg:text-lg">
                Founded in 2004, our mission is to transform spaces into
                extraordinary experiences that elevate the human spirit. We
                seamlessly blend engineering and interior design, embarking on a
                journey to create captivating environments that inspire and
                innovate.
            </p>
            <AchievementsGrid />
            <p class="text-base text-secondary-400 lg:text-lg">
                With every project, our talented team of engineers, designers,
                and visionaries collaborates closely with clients, translating
                their aspirations into meticulously crafted designs that
                harmonize functionality, innovation, and aesthetic beauty.
                Through our collaborative approach and commitment to excellence,
                we deliver spaces that transcend the ordinary, leaving a lasting
                impression on all who experience them.
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
