<template>
    <NuxtLink :to="slug">
        <article
            class="custom-gradient group relative flex aspect-square flex-col items-start justify-end gap-6 overflow-clip rounded-[2px]"
        >
            <NuxtImg
                :src="thumbnail"
                class="absolute inset-0 min-h-full min-w-full overflow-clip object-cover"
                :alt="projectTitle"
                :width="getImageDimensions(thumbnail).width"
                :height="getImageDimensions(thumbnail).height"
                format="webp"
                provider="storyblok"
                quality="50"
                loading="eager"
            />
            <div class="project-details custom-gradient min-w-full p-8">
                <p
                    class="text-base font-semibold text-secondary-400 md:text-lg"
                >
                    {{ projectCategory }}
                </p>
                <h2
                    class="text-2xl font-semibold text-secondary-100 group-hover:underline md:text-4xl"
                >
                    {{ projectTitle }}
                </h2>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
import getImageDimensions from '~/utils/getImageDimensions';
const props = defineProps({
    slug: String,
    thumbnail: String,
    projectCategory: String,
    projectTitle: String,
});
</script>

<style scoped>
.custom-gradient {
    background: linear-gradient(
        360deg,
        hsl(240 4% 16% / 0.8) 60%,
        hsl(240 4% 55% / 0) 100%
    );
}
.project-details {
    position: relative;
    z-index: 10;
}
</style>
