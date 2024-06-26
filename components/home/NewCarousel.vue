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
        >
            <Icon name="ph:play" size="32px" class="text-secondary-600" />
        </button>
    </div>
</template>

<script setup>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 32,
    speed: 600, // Adjust the speed for smoother transitions
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
            // else if (!swiperEl.swiper.isEnd) {
            //     swiperEl.swiper.autoplay.start();
            // }
        },
    },
};

onMounted(() => {
    // swiper element
    const swiperEl = document.querySelector('swiper-container');
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
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
