<template>
    <section
        class="contact-us relative mb-20 overflow-clip rounded-md py-20 lg:mb-28 lg:py-28"
    >
        <div
            class="flex flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center"
        >
            <div class="space-y-4">
                <h4
                    class="text-3xl font-semibold text-secondary-50 lg:text-5xl"
                >
                    {{ $t('home_cta.title') }}
                </h4>
                <p class="text-base text-secondary-400 lg:text-lg">
                    {{ $t('home_cta.description') }}
                </p>
            </div>
            <ButtonLink class="primary" :to="localePath('/contact-us')">
                {{ $t('home_cta.btn') }}</ButtonLink
            >
        </div>
        <NuxtImg
            src="/images/about-us-header.jpg"
            alt="Primary background image"
            class="full-width absolute left-2/4 top-2/4 -z-10 min-h-full min-w-full brightness-[30%]"
            preload
            format="webp"
            width="4000"
            height="3008"
        />
    </section>
</template>

<script setup>
import ButtonLink from '~/components/base/ButtonLink.vue';
const localePath = useLocalePath();
</script>

<style scoped>
.contact-us > img {
    transform: translate(-50%, -50%);
}
</style>
