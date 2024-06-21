<template>
    <div class="achievements relative grid grid-cols-2 grid-rows-2 gap-8">
        <div class="flex flex-col items-start gap-3 py-8">
            <p class="text-5xl font-extralight text-secondary-50 lg:text-7xl">
                100+
            </p>
            <p class="text-base text-secondary-400">
                {{ $t('home_about.grid_titles.successful_projects') }}
            </p>
        </div>
        <div class="flex flex-col items-start gap-3 py-8 pl-8">
            <p class="text-5xl font-extralight text-secondary-50 lg:text-7xl">
                {{ yearsOfExperience }}
            </p>
            <p class="text-base text-secondary-400">
                {{ $t('home_about.grid_titles.years-of-experience') }}
            </p>
        </div>
        <div class="flex flex-col items-start gap-3 py-8">
            <p class="text-5xl font-extralight text-secondary-50 lg:text-7xl">
                9
            </p>
            <p class="text-base text-secondary-400">
                {{ $t('home_about.grid_titles.locations-across-iraq') }}
            </p>
        </div>
        <div class="flex flex-col items-start gap-3 py-8 pl-8">
            <p class="text-5xl font-extralight text-secondary-50 lg:text-7xl">
                100%
            </p>
            <p class="text-base text-secondary-400">
                {{ $t('home_about.grid_titles.satisfaction-rate') }}
            </p>
        </div>
        <div class="h-line" aria-hidden="true" aria-label="decorative"></div>
        <div class="v-line" aria-hidden="true" aria-label="decorative"></div>
        <Icon
            name="ph:diamond-fill"
            aria-hidden="true"
            aria-label="decorative"
            size="30px"
        />
    </div>
</template>

<script setup>
const yearFounded = 2004;

let currentYear = ref(new Date().getFullYear());

let yearsOfExperience = currentYear.value - yearFounded;
</script>

<style scoped>
.h-line,
.v-line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Adjust for the element's own size */
    background-color: theme('colors.secondary.50');
}

.h-line {
    min-width: 100%;
    height: 1px;
}
.v-line {
    min-height: 100%;
    width: 1px;
}

.achievements .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Adjust for the element's own size */
    color: theme('colors.secondary.50');
}
</style>
