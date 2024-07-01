<template>
    <swiper-container
        class="full-width overflow-hidden"
        id="swiper-1"
        init="false"
    >
        <ContentList :path="`/${locale}/projects`" v-slot="{ list }">
            <!--  :slug="normalizePath(article._path)" -->
            <swiper-slide
                v-for="article in list.slice(0, 5)"
                :key="article._path"
                class="w-fit overflow-hidden"
                id="swiper-slide"
            >
                <NuxtLink :to="normalizePath(article._path)" class="block">
                    <article
                        class="group relative flex aspect-video min-w-full cursor-pointer items-end object-cover"
                    >
                        <NuxtImg
                            :src="article.thumbnail"
                            class="absolute inset-0 -z-10 aspect-video min-h-full min-w-full overflow-clip object-cover"
                        />
                        <div
                            class="custom-gradient flex min-w-full p-8"
                            :class="{
                                'justify-end':
                                    locale === 'ar' || locale === 'ku',
                            }"
                        >
                            <h2
                                class="max-w-[25ch] text-balance text-3xl font-semibold text-secondary-50 group-hover:underline lg:text-5xl"
                                :class="{
                                    'text-right':
                                        locale === 'ar' || locale === 'ku',
                                }"
                            >
                                {{ article.title }}
                            </h2>
                        </div>
                    </article>
                </NuxtLink>
            </swiper-slide>
        </ContentList>
    </swiper-container>
    <div class="flex items-center gap-3 justify-self-center">
        <div
            class="swiper-pagination flex items-center justify-center rounded-full bg-secondary-700/10 px-4 py-6"
        ></div>
        <button
            class="aspect-square w-full rounded-full bg-secondary-700/10 p-4"
            @click="toggleAutoPlay"
        >
            <Icon
                :name="isAutoPlaying ? 'ph:pause' : 'ph:play'"
                size="30"
                class="text-secondary-500/90"
            />
        </button>
    </div>
</template>

<script setup>
// import function to register Swiper custom elements

import normalizePath from '~/utils/normalizePath';

import { register } from 'swiper/element/bundle';

const { locale } = useI18n();
// register Swiper custom elements
register();

const isAutoPlaying = ref(true);
let swiperInstance = null;
// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 32,
    speed: 600, // Adjust the seed for smoother transitions
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    keyboard: { enabled: true },
    breakpoints: {
        1536: {
            slidesPerView: 1.5,
        },
    },
    on: {
        init() {
            // ...
        },
        slideChange() {
            const swiperEl = document.querySelector('swiper-container');
            if (swiperEl.swiper.isEnd) {
                swiperEl.swiper.autoplay.stop();
            }
        },
    },
};

const toggleAutoPlay = () => {
    if (!swiperInstance) return;

    if (isAutoPlaying.value) {
        swiperInstance.autoplay.stop();
        isAutoPlaying.value = false;
    } else {
        swiperInstance.autoplay.start();
        isAutoPlaying.value = true;
    }
};

onMounted(() => {
    const swiperEl = document.querySelector('swiper-container');
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    // Store the Swiper instance
    swiperInstance = swiperEl.swiper;

    // Update autoplay state when Swiper reaches the end
    swiperInstance.on('reachEnd', () => {
        if (swiperInstance.autoplay.running) {
            swiperInstance.autoplay.stop();
            isAutoPlaying.value = false;
        }
    });
});
</script>

<style scoped>
#swiper-1 {
    max-width: calc(100% - 2rem);
    transition: transform 0.6s cubic-bezier(0.73, -0.01, 0.83, 0.67); /* Adding smooth ease-in transition */
    direction: ltr !important;
}

.custom-gradient {
    background: linear-gradient(
        360deg,
        hsl(240 4% 16% / 0.5) 60%,
        hsl(240 4% 55% / 0) 100%
    );
}

:global(.swiper-pagination-bullet) {
    width: theme('spacing.4');
    height: theme('spacing.4');
    margin-inline: theme('spacing.4');
    border-radius: 100%;
    cursor: pointer;
    background: theme('colors.secondary.600');
}

:global(.swiper-pagination-bullet-active) {
    background: theme('colors.secondary.900');
}

@media screen and (min-width: 768px) {
    #swiper-1 {
        max-width: calc(100% - 4rem);
    }
}

@media screen and (min-width: 1280px) {
    #swiper-1 {
        max-width: 1216px;
    }
}

@media screen and (min-width: 1536px) {
    #swiper-1 {
        max-width: calc(100% - 4rem);
    }
}
</style>
