<template>
    <div class="language-select relative" @click="toggleDropdown">
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
            class="perfect-shadow absolute mt-4 flex min-h-28 flex-col items-start gap-2 rounded-sm bg-zinc-100 p-8"
        >
            <div
                v-for="locale in locales"
                :key="locale.code"
                class="text-sm text-secondary-800"
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
