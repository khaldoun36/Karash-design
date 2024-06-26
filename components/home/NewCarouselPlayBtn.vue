<template>
    <div @click="togglePlayPause" class="icon-wrapper">
        <Icon
            :name="isPlaying ? 'mdi:pause' : 'mdi:play'"
            :class="{ 'fade-out': isAnimating }"
        />
        <Icon
            :name="isPlaying ? 'mdi:play' : 'mdi:pause'"
            :class="{ 'fade-in': isAnimating }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { Icon } from '@iconify/vue';

const isPlaying = ref(false);
const isAnimating = ref(false);

const togglePlayPause = () => {
    isAnimating.value = true;
    setTimeout(() => {
        isPlaying.value = !isPlaying.value;
        isAnimating.value = false;
    }, 150);
};
</script>

<style scoped>
.icon-wrapper {
    position: relative;
    cursor: pointer;
    width: 48px;
    height: 48px;
}

.icon-wrapper > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.25s ease-in-out;
}

.fade-out {
    opacity: 0;
}

.fade-in {
    opacity: 1;
}
</style>
