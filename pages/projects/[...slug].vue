<template>
    <main class="projects-page grid gap-8 py-[184px]">
        <div class="image-container grid gap-8">
            <NuxtImg
                v-for="(img, index) in data.images"
                :key="index"
                :src="img"
                alt="project image description"
                format="webp"
                provider="storyblok"
                quality="50"
                :width="getImageDimensions(img).width"
                :height="getImageDimensions(img).height"
                loading="eager"
            />
        </div>
        <div
            class="content-container sticky-container row-start-1 space-y-4 lg:col-start-2"
        >
            <div class="sticky-content space-y-4">
                <h1
                    class="text-balance text-3xl font-semibold text-secondary-50"
                >
                    {{ data.title }}
                </h1>
                <p class="text-base text-secondary-400">
                    {{ data.description }}
                </p>
                <div
                    class="flex items-center gap-6 pt-6 text-xl text-secondary-200"
                >
                    <p class="">{{ $t('pages.projects.location') }}:</p>
                    <p class="text-secondary-400">{{ data.location }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import getImageDimensions from '~/utils/getImageDimensions.js';
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
});
</script>

<style scoped>
@media screen and (min-width: 1024px) {
    .projects-page {
        grid-template-columns: 1.5fr 1fr;
    }
    .sticky-container {
        position: relative;
    }
    .sticky-content {
        position: sticky;
        top: 160px; /* Adjust this value if you need some offset from the top */
    }
}
</style>
