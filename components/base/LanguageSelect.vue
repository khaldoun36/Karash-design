<template>
    <div class="relative" @click="toggleDropdown">
        <button
            :class="
                twMerge(
                    `flex items-center justify-center gap-2 text-secondary-400`,
                    classList
                )
            "
        >
            <Icon name="ooui:globe" />
            <span>{{ currentLocaleName }}</span>
            <Icon name="entypo:chevron-small-down" />
        </button>
        <div
            v-if="dropdownOpen"
            class="absolute mt-2 flex min-h-28 flex-col items-start gap-2 rounded-md bg-secondary-800/50 p-8 backdrop-blur-md"
        >
            <div
                v-for="locale in locales"
                :key="locale.code"
                class="text-sm text-secondary-50"
            >
                <NuxtLink :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const localeNames = {
    en: 'EN',
    ar: 'AR',
    tr: 'TR',
    ku: 'KU',
};

const currentLocaleName = computed(
    () => localeNames[locale.value] || locale.value
);

const props = defineProps(['classList']);
</script>

<style scoped>
/* Add any necessary styles here */
</style>
