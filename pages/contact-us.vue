<template>
    <main
        class="contact-us full-width content-grid hero-section full-width content-grid relative overflow-clip pb-20 pt-[152px] 2xl:pb-28 2xl:pt-[184px]"
    >
        <h1
            class="text-balance text-5xl font-semibold text-secondary-50 md:max-w-[25ch] lg:text-8xl"
        >
            Let's talk
        </h1>
        <p class="mt-6 text-base text-secondary-400 lg:text-lg">
            We would love to chat about
            <span class="font-semibold text-secondary-50"
                >your next project.</span
            >
        </p>
        <NuxtImg
            src="./images/about-us-header.jpg"
            alt="Primary background image"
            class="full-width absolute left-2/4 top-2/4 -z-10 min-h-full min-w-full brightness-[30%]"
            preload
            format="webp"
            width="4000"
            height="3008"
        />
    </main>
    <ContactForm />
    <LocationsList />
</template>

<script setup>
import LocationsList from '~/components/base/LocationsList.vue';
import ContactForm from '~/components/base/ContactForm.vue';
</script>

<style scoped>
.contact-us > img {
    transform: translate(-50%, -50%);
}
</style>
