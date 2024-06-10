<template>
    <div
        class="location flex h-auto flex-col items-start justify-end gap-8 rounded-md border border-white/10 p-8 md:aspect-square"
    >
        <h4 class="text-2xl font-semibold text-secondary-50">
            {{ city }}
        </h4>
        <div class="space-y-6">
            <p class="location-info min-h-[60px] text-sm text-secondary-400">
                <Icon name="ph:map-pin" size="24px" />
                <span>{{ location }}</span>
            </p>
            <p class="location-info text-sm text-secondary-400">
                <Icon name="ph:phone" size="24px" />
                <span>{{ phoneNumber }}</span>
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    city: String,
    location: String,
    phoneNumber: String,
});
</script>

<style scoped>
.location-info {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: theme('spacing.6');
}
</style>
