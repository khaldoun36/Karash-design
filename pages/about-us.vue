<template>
    <main
        class="about-us full-width content-grid hero-section full-width content-grid relative overflow-clip pb-40 pt-[232px] 2xl:pb-56 2xl:pt-[300px]"
    >
        <h1
            class="text-balance text-5xl font-semibold text-secondary-50 md:max-w-[25ch] lg:text-8xl"
        >
            We build your dream interior
        </h1>
        <NuxtImg
            src="/images/about-us-header.jpg"
            alt="Primary background image"
            class="full-width absolute left-2/4 top-2/4 -z-10 min-h-full min-w-full brightness-50"
            preload="high"
            format="webp"
            width="4000"
            height="3008"
        />
    </main>
    <section class="grid gap-8 py-20 md:grid-cols-2 lg:py-28">
        <h2
            class="text-balance text-3xl font-semibold text-secondary-50 lg:text-5xl"
        >
            Who we are
        </h2>
        <div class="text-container space-y-6">
            <p class="text-base text-secondary-400 lg:text-lg">
                Welcome to Karash Company, where tradition, innovation, and
                exquisite craftsmanship converge to redefine home furniture,
                kitchens, and decor. Since our founding in 2004, we have been
                dedicated to building trust and ensuring customer satisfaction
                by providing exceptional services and the highest quality wood.
            </p>
            <p class="text-base text-secondary-400 lg:text-lg">
                As the industry leader, we are proud to operate two
                state-of-the-art factories in Turkey and three in Erbil,
                alongside exclusive manufacturing agencies for alabaster
                surfaces, electrical equipment, accessories, wallpapers,
                handrails, and wooden and iron doors. With eleven branches
                across Iraq and plans for international expansion, we are
                committed to transforming your living spaces with unparalleled
                elegance and functionality.
            </p>
            <p class="text-base text-secondary-400 lg:text-lg">
                Step into a world where superior craftsmanship meets visionary
                design, and let Karash Company elevate your home to new heights
                of sophistication and style.
            </p>
        </div>
    </section>
    <Achievements />
    <NuxtImg
        src="./images/about-us-header.jpg"
        class="full-width aspect-video max-h-[800px] min-w-full object-cover"
        alt="An image of the compnay founders and employees"
        loading="lazy"
        densities="x1 x2"
        width="4000"
        height="3008"
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
