<template>
    <div :class="twMerge('social-links flex items-center gap-8')">
        <NuxtLink
            to="https://www.facebook.com/karash.Kitchen/"
            target="_blank"
            class="text-secondary-400 hover:text-secondary-50"
        >
            <Icon name="ant-design:facebook-outlined" :size="size" />
        </NuxtLink>
        <NuxtLink
            to="https://www.facebook.com/karash.Kitchen/"
            target="_blank"
            class="text-secondary-400 hover:text-secondary-50"
        >
            <Icon name="ant-design:instagram-outlined" :size="size" />
        </NuxtLink>
        <NuxtLink
            to="https://www.facebook.com/karash.Kitchen/"
            target="_blank"
            class="text-secondary-400 hover:text-secondary-50"
        >
            <Icon name="ant-design:linkedin-outlined" :size="size" />
        </NuxtLink>
    </div>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps({
    size: {
        type: String,
        default: '44px', // Set default size to 'medium'
    },
});
</script>

<style scoped></style>
