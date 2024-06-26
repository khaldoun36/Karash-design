<template>
    <!--  -->
    <Swiper
        :modules="[Pagination]"
        :slides-per-view="width >= 1536 ? 1.5 : 1"
        :space-between="32"
        :centered-slides="true"
        :keyboard="{ enabled: true }"
        :pagination="{
            paginationConfig,
        }"
        class="full-width overflow-hidden"
        id="swiper-1"
    >
        <SwiperSlide
            v-for="slide in 6"
            :key="slide"
            class="w-fit overflow-hidden"
            id="swiper-slide"
        >
            <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="khaldoion block aspect-video min-w-full object-cover"
            />
        </SwiperSlide>
        <div class="swiper-pagination-custom"></div>
    </Swiper>
</template>

<script setup>
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

onMounted(() => {
    const paginationConfig = {
        el: '.swiper-pagination-custom',
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };
});
</script>

<style scoped>
#swiper-1 {
    max-width: calc(100% - 2rem);
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

/* Custom Pagination Styles */
.swiper-pagination-custom {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    background-color: red;
}

.swiper-pagination-custom .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: red;
    opacity: 1;
    margin: 0 5px;
    transition: opacity 0.3s;
}

.swiper-pagination-custom .swiper-pagination-bullet-active {
    background-color: #ff0000;
}
</style>
