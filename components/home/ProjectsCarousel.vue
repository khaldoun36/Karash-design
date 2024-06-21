<template>
    <div class="embla__viewport full-width" ref="viewport">
        <ul class="embla__container">
            <li
                v-for="(n, index) in slides.length"
                :key="n"
                class="embla__slide"
                :class="{ 'is-active': selectedIndex === index }"
            >
                <ProjectCard />
            </li>
        </ul>
    </div>
    <div
        class="embla__dots fixed bottom-16 rounded-full bg-secondary-50/10 p-6 backdrop-blur-lg transition-transform duration-300"
        :class="{ active: isDotsContainerActive }"
    >
        <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="scrollToSlide(index)"
            :class="{ 'is-selected': selectedIndex === index }"
        ></button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCard from '~/components/base/ProjectCard.vue';
import { useIntersectionObserver } from '@vueuse/core';

const slides = [
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const viewport = ref(null);
const selectedIndex = ref(0);
const isDotsContainerActive = ref(false);

let embla = null;

const scrollToSlide = (index) => embla.scrollTo(index);

const updateSelectedIndex = () => {
    selectedIndex.value = embla.selectedScrollSnap();
};

onMounted(() => {
    embla = EmblaCarousel(viewport.value, { loop: true }, [
        Autoplay({ delay: 4000 }),
    ]);
    embla.on('select', updateSelectedIndex);
    updateSelectedIndex();

    const { stop } = useIntersectionObserver(
        viewport,
        ([{ isIntersecting }]) => {
            isDotsContainerActive.value = isIntersecting;
        },
        {
            threshold: 0.9,
            rootMargin: '0px',
        }
    );
});

onUnmounted(() => {
    if (embla) embla.destroy();
});
</script>

<style scoped>
.embla__viewport {
    overflow: hidden;
    width: 100%;
    direction: ltr !important;
}

.embla__container {
    display: flex;
}

.embla__slide {
    position: relative;
    flex: 0 0 calc(100% - 1rem);
    margin-inline: 2rem;
}

@media screen and (min-width: 768px) {
    .embla__slide {
        flex: 0 0 calc(100% - 2rem);
    }
}

@media screen and (min-width: 1216px) {
    .embla__slide {
        flex: 0 0 1216px;
    }
}

.embla__dots {
    display: none;
    justify-content: center;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    will-change: transform;
}

@media screen and (min-width: 1216px) {
    .embla__dots {
        display: flex;
    }
}

.embla__dots.active {
    transform: translateX(-50%) scale(1);
}

.embla__dots button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: theme('colors.secondary.400');
    border: none;
    margin: 0 5px;
    cursor: pointer;
}

.embla__dots button.is-selected {
    background: theme('colors.secondary.900');
}
</style>
