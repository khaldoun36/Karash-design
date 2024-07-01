<template>
    <section class="space-y-16 py-20 lg:py-28">
        <h2
            class="max-w-[15ch] text-3xl font-semibold text-secondary-50 lg:text-5xl"
        >
            {{ $t('pages.afterSale.locationsTitle') }}
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <!-- item.city -->
            <LocationCard
                v-for="item in locations"
                :city="item.city"
                :location="item.location"
                :locationLink="item.locationLink"
                :phoneNumber="item.phoneNumber"
                :key="item.phoneNumber"
            />
        </div>
    </section>
</template>

<script setup>
import locations_en from '~/data/locations_en.js';
import locations_ar from '~/data/locations_ar.js';

import LocationCard from '~/components/base/LocationCard.vue';

const { locale } = useI18n();

const locations = computed(() => {
    if (locale.value === 'en') {
        return locations_en;
    } else if (locale.value === 'ar') {
        return locations_ar;
    }
});
</script>

<style scoped></style>
