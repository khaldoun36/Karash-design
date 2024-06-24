<template>
    <section class="grid grid-cols-3 gap-8 pb-20 lg:pb-28">
        <div
            class="flex flex-col items-center justify-center gap-3 justify-self-start"
        >
            <p class="lg:text-8xl text-5xl font-light text-secondary-50">
                100+
            </p>
            <p class="text-balance text-xs text-secondary-400 lg:text-xl">
                {{ $t('pages.about.sections.numbers.successfulProjects') }}
            </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-3">
            <p class="lg:text-8xl text-5xl font-light text-secondary-50">20+</p>
            <p class="text-balance text-xs text-secondary-400 lg:text-xl">
                {{ $t('pages.about.sections.numbers.experience') }}
            </p>
        </div>
        <div
            class="flex flex-col items-center justify-center gap-3 justify-self-end"
        >
            <p class="lg:text-8xl text-5xl font-light text-secondary-50">9+</p>
            <p class="text-balance text-xs text-secondary-400 lg:text-xl">
                {{ $t('pages.about.sections.numbers.locations') }}
            </p>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
