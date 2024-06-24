<template>
    <button
        class="btn-container relative order-last size-10 cursor-pointer transition-transform md:hidden"
        :class="{ active: store.menuActive }"
        aria-label="Hamburger menu"
        @click="store.toggleMenu"
    >
        <div
            class="line line-1 absolute left-[7px] top-[7px] size-[26px] transition-transform duration-300"
        >
            <div
                class="line-inner line-inner-1 absolute top-3 h-[2px] w-[27px] translate-y-[-4px] rounded-sm bg-zinc-400 transition-transform delay-200 duration-200"
            ></div>
        </div>
        <div
            class="line line-2 absolute left-[7px] top-[7px] size-[26px] transition-transform duration-300"
        >
            <div
                class="line-inner line-inner-2 absolute bottom-3 h-[2px] w-[27px] translate-y-[4px] rounded-sm bg-zinc-400 transition-transform delay-200 duration-200"
            ></div>
        </div>
    </button>
</template>

<script setup>
import { useIsMenuActive } from '~/stores/isMenuActive.js';

const store = useIsMenuActive();

console.log(store.menuActive);
</script>

<style scoped>
.btn-container.active .line-1 {
    transform: rotateZ(45deg);
}
.btn-container.active .line-2 {
    transform: rotateZ(-45deg);
}
.btn-container.active .line-inner {
    transform: none;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-container.active .line {
    transition-delay: 200ms;
}
</style>
