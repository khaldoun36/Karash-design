<template>
    <main class="pb-16 pt-[184px]">
        <h1
            class="lg:text-8xl mx-auto text-balance text-center text-5xl font-semibold text-secondary-50 md:max-w-[25ch]"
        >
            {{ $t('pages.projects.title') }}
        </h1>
    </main>
    <section class="">
        <ul class="mx-auto hidden items-center justify-center gap-5 md:flex">
            <li
                v-for="item in categories"
                :key="item.value"
                class="rounded-[2px] px-5 py-3 text-base font-medium text-secondary-400 transition-colors hover:bg-white/5"
                :class="{ active: item.value === selectedValue }"
                @click="setListValue(item.value)"
            >
                <button :value="item.value">
                    {{ item.text }}
                </button>
            </li>
        </ul>
        <ContentList :path="`/${locale}/projects`" v-slot="{ list }">
            <div class="mb-20 mt-16 grid gap-8 md:mb-28 md:grid-cols-2">
                <ProjectCard
                    v-for="article in list"
                    :key="article._path"
                    :slug="normalizePath(article._path)"
                    :thumbnail="article.thumbnail"
                    :projectCategory="article.category"
                    :projectTitle="article.title"
                />
            </div>
        </ContentList>
    </section>
</template>

<script setup>
import ProjectCard from './components/ProjectCard';

import normalizePath from '~/utils/normalizePath';

const { locale } = useI18n();

const { t } = useI18n();
const categories = [
    {
        value: 'all',
        text: `${t('pages.projects.categories.all')}`,
    },
    {
        value: 'interiorDecors',
        text: `${t('pages.projects.categories.interiorDecors')}`,
    },
    {
        value: 'modernKitchens',
        text: `${t('pages.projects.categories.modernKitchens')}`,
    },
    {
        value: 'bedrooms',
        text: `${t('pages.projects.categories.bedrooms')}`,
    },
    {
        value: 'classicKitchens',
        text: `${t('pages.projects.categories.classicKitchens')}`,
    },
];
const selectedValue = ref('all');

const setListValue = (value) => {
    selectedValue.value = value;
};
</script>

<style scoped>
.active {
    background-color: theme('colors.white/10%');
    color: theme('colors.secondary.100');
}
</style>
