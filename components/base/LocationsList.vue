<template>
    <section class="space-y-16 py-20 lg:py-28">
        <h2
            class="max-w-[15ch] text-3xl font-semibold text-secondary-50 lg:text-5xl"
        >
            Visit Us at One of Our Locations
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <LocationCard
                v-for="item in storeLocations"
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
import storeLocations from '~/data/storeLocations.json';
import LocationCard from '~/components/base/LocationCard.vue';
</script>

<style lang="scss" scoped></style>
