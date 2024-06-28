<template>
    <DropdownMenuRoot v-model:open="toggleState">
        <!--   aria-label="Customise options" -->
        <DropdownMenuTrigger
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
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                class="flex min-h-28 flex-col items-start gap-2 rounded-md bg-secondary-800/50 p-8 backdrop-blur-md"
            >
                <DropdownMenuItem
                    class="text-sm text-secondary-50"
                    v-for="locale in locales"
                    :key="locale.code"
                >
                    <NuxtLink :to="switchLocalePath(locale.code)">{{
                        locale.name
                    }}</NuxtLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>
<script setup>
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'radix-vue';
import { twMerge } from 'tailwind-merge';

const toggleState = ref(false);

// set the language
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// Mapping of locale codes to names
const localeNames = {
    en: 'EN',
    ar: 'AR',
    tr: 'TR',
    ku: 'KU',
};

// Computed property to get the current locale name
const currentLocaleName = computed(
    () => localeNames[locale.value] || locale.value
);

const props = defineProps(['classList']);
</script>
