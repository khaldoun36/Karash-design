<template>
    <swiper-container
        class="full-width overflow-hidden"
        id="swiper-1"
        init="false"
    >
        <swiper-slide
            v-for="n in 5"
            :key="n"
            class="w-fit overflow-hidden"
            id="swiper-slide"
        >
            <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="khaldoion block aspect-video min-w-full object-cover"
            />
        </swiper-slide>
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
            <!-- <NewCarouselPlayBtn /> -->
        </button>
    </div>
</template>

<script setup>
import NewCarouselPlayBtn from './NewCarouselPlayBtn.vue';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
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
