<template>
    <div
        class="location flex h-auto flex-col items-start justify-end gap-8 rounded-md border border-white/10 p-8 md:aspect-square"
    >
        <h4 class="text-2xl font-semibold text-secondary-50">
            {{ city }}
        </h4>
        <div class="space-y-6">
            <NuxtLink
                class="location-info min-h-[60px] text-sm text-secondary-400"
                :to="locationLink"
                target="_blank"
            >
                <Icon name="ph:map-pin" size="24px" />
                <span>{{ location }}</span>
            </NuxtLink>
            <NuxtLink
                class="location-info text-sm text-secondary-400"
                :to="`tel:${phoneNumber}`"
            >
                <Icon name="ph:phone" size="24px" />
                <span
                    style="direction: ltr !important"
                    :class="{
                        'text-right': locale === 'ku' || locale === 'ar',
                    }"
                    >{{ phoneNumber }}</span
                >
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    city: String,
    location: String,
    phoneNumber: String,
    locationLink: String,
});

const { locale } = useI18n();
</script>

<style scoped>
.location-info {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: theme('spacing.6');
}
</style>
