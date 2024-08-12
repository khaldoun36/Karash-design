<template>
    <!-- pb-40 pt-[232px] 2xl:pb-56 2xl:pt-[300px] -->
    <main
        class="full-width content-grid hero-section relative grid min-h-dvh place-content-center"
    >
        <div
            class="img-container full-width absolute inset-0 -z-10 h-full w-full overflow-clip"
        >
            <video
                ref="videoBG"
                :src="videoSource"
                loop
                autoplay
                muted
                playsinline
                preload="auto"
                class="h-full w-full object-cover brightness-[60%]"
                id="videoBG"
            />
        </div>
        <h1
            class="words-wrapper animated-element max-w-[20ch] pt-28 text-5xl font-semibold text-secondary-50 lg:text-[5rem] lg:leading-none"
        >
            {{ $t('home_hero_title.hero_text') }}
        </h1>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const videoBG = ref(null);
const localePath = useLocalePath();

import videoSource from '~/assets/bgVideo.mp4';

onMounted(() => {
    videoBG.value.playbackRate = 0.65;

    // Attempt to play the video
    const playVideo = async () => {
        try {
            await videoBG.value.play();
        } catch (err) {
            console.log('Autoplay was prevented:', err);
            // You could implement a play button here as a fallback
        }
    };

    playVideo();
});
</script>

<style scoped>
@keyframes slide-top {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

.animated-element {
    animation: slide-top 300ms ease-in-out backwards;
}
</style>
