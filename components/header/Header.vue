<template>
    <header
        class="full-width content-grid fixed left-0 right-0 top-0 z-[999]"
        :class="{ 'backdrop-blur': isBlured }"
    >
        <div class="header-layout flex items-center justify-between py-4">
            <NuxtLink to="/" class="bg-dark">
                <img
                    src="/layer-1.svg"
                    alt="website's logo"
                    width="7118"
                    height="2563"
                    class="h-8 max-w-min"
                />
            </NuxtLink>
            <Navbar />
            <HeaderDrawerButton
                @changeBtnState="handleEvent"
                :isMenuActive="isMenuActive"
            />
            <HeaderMobileDrawer :isMenuActive="isMenuActive" />
        </div>
    </header>
</template>

<script setup>
import Navbar from '~/components/header/Navbar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { throttle } from 'lodash';

const isMenuActive = ref(false);
const isBlured = ref(false);

function handleEvent() {
    isMenuActive.value = !isMenuActive.value;
}

function handleScroll() {
    isBlured.value = window.scrollY >= 20;
}

const throttledHandleScroll = throttle(handleScroll, 100);

onMounted(() => {
    window.addEventListener('scroll', throttledHandleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttledHandleScroll);
});
</script>

<style scoped></style>
