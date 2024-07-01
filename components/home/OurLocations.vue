<template>
    <section class="locations space-y-16 py-20 lg:py-28">
        <h2 class="text-3xl font-semibold text-secondary-50 lg:text-5xl">
            {{ $t('home_locations.title_1') }} <br />{{
                $t('home_locations.title_2')
            }}
        </h2>
        <div
            class="mobile-locations grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:hidden"
        >
            <LocationCard
                v-for="item in storeLocations"
                :city="item.city"
                :location="item.location"
                :locationLink="item.locationLink"
                :phoneNumber="item.phoneNumber"
                :key="item.phoneNumber"
            />
        </div>
        <div class="locations hidden grid-cols-2 gap-8 xl:grid">
            <div
                class="desktop-locations grid grid-cols-2 content-center gap-8"
            >
                <LocationCard
                    v-for="item in filteredLocations"
                    :key="item.location"
                    :city="item.city"
                    :location="item.location"
                    :locationLink="item.locationLink"
                    :phoneNumber="item.phoneNumber"
                />
            </div>
            <LocationsMap @changeLocation="handleLocationChange" />
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import LocationCard from '~/components/base/LocationCard.vue';
import LocationsMap from '~/components/base/LocationsMap.vue';
import locations_en from '~/data/locations_en.js';
import locations_ar from '~/data/locations_ar.js';

const { locale } = useI18n();

const locations = computed(() => {
    if (locale.value === 'en') {
        return locations_en;
    } else if (locale.value === 'ar') {
        return locations_ar;
    }
});

const selectedLocation = ref(locations.value[0].locationKey);

const filteredLocations = computed(() =>
    locations.value.filter(
        (entry) =>
            entry.locationKey.toLowerCase() ===
            selectedLocation.value.toLowerCase()
    )
);

const handleLocationChange = (newLocation) => {
    selectedLocation.value = newLocation;
};
</script>

<style scoped></style>
