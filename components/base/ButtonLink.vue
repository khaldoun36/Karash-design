<template>
    <NuxtLink
        :class="
            twMerge(
                `btn flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-sm pl-6 pr-[19px] text-sm font-medium text-secondary-50 transition-colors active:scale-95 ${className}`
            )
        "
    >
        <slot />
        <Icon
            name="heroicons-solid:chevron-right"
            size="18px"
            class="icon mt-[0.75px] transition-transform"
        />
    </NuxtLink>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps(['className']);
</script>

<style>
.btn {
    direction: ltr !important;
}
.btn.primary {
    background-color: theme('colors.primary.500');
}

.btn.secondary {
    background-color: theme('colors.transparent');
    position: relative;
}

.btn.secondary::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 1.5px;
    width: 70%;
    margin-inline: auto;
    background-color: theme('colors.transparent');
    display: block; /* or inline-block */
}

@media (hover: hover) {
    .btn.primary:hover {
        background-color: theme('colors.primary.600');
    }

    .btn.primary:hover .icon {
        transform: translateX(2px);
    }

    .btn.secondary:hover::after {
        background-color: theme('colors.secondary.100/80');
    }
}
</style>
