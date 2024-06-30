<template>
    <main
        class="about-us full-width content-grid hero-section full-width content-grid relative overflow-clip pb-40 pt-[232px] 2xl:pb-56 2xl:pt-[300px]"
    >
        <h1
            class="lg:text-8xl text-balance text-5xl font-semibold text-secondary-50 md:max-w-[25ch]"
        >
            {{ $t('pages.about.mainTitle') }}
        </h1>
        <NuxtImg
            src="/images/about-us-header.jpg"
            alt="Primary background image"
            class="full-width absolute left-2/4 top-2/4 -z-10 min-h-full min-w-full brightness-50"
            preload
            format="webp"
            width="4000"
            height="3008"
        />
    </main>
    <section class="grid gap-8 py-20 md:grid-cols-2 lg:py-28">
        <h2
            class="text-balance text-3xl font-semibold text-secondary-50 lg:text-5xl"
        >
            {{ $t('pages.about.sections.whoWeAre.title') }}
        </h2>
        <div class="text-container space-y-6">
            <p class="text-base text-secondary-400 lg:text-lg">
                {{ $t('pages.about.sections.whoWeAre.paragraphOne') }}
            </p>
            <p class="text-base text-secondary-400 lg:text-lg">
                {{ $t('pages.about.sections.whoWeAre.paragraphTwo') }}
            </p>
            <p class="text-base text-secondary-400 lg:text-lg">
                {{ $t('pages.about.sections.whoWeAre.paragraphThree') }}
            </p>
        </div>
    </section>
    <Achievements />
    <NuxtImg
        src="/images/about-us-full.jpeg"
        class="full-width aspect-video max-h-[800px] min-w-full object-cover object-[center_-100px]"
        alt="An image of the compnay founders and employees"
        loading="lazy"
        width="5472"
        height="3648"
        format="webp"
    />
    <GuidingPrinciples />
</template>

<script setup>
import Achievements from '~/components/about/Achievements.vue';
import GuidingPrinciples from '~/components/about/GuidingPrinciples.vue';
</script>

<style scoped>
.about-us > img {
    transform: translate(-50%, -50%);
}
</style>
