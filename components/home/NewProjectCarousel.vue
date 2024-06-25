<template>
    <!--  -->
    <Swiper
        :modules="[Pagination]"
        :slides-per-view="width >= 1536 ? 1.5 : 1"
        :space-between="32"
        :centered-slides="true"
        :pagination="{ clickable: true }"
        class="full-width overflow-hidden"
        id="swiper-1"
    >
        <SwiperSlide
            v-for="slide in 6"
            :key="slide"
            class="swiper-slide w-fit overflow-hidden"
        >
            <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="khaldoion block aspect-video min-w-full object-cover"
            />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
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
</style>
