<template>
    <section
        class="projects full-width content-grid relative space-y-16 py-20 lg:py-28"
    >
        <div
            class="flex flex-col items-start gap-6 lg:flex-row lg:items-baseline lg:justify-between"
        >
            <h2 class="text-3xl font-semibold text-secondary-50 lg:text-5xl">
                Our signature projects
            </h2>
            <ButtonLink class="secondary" className="pl-0 lg:pl-6"
                >View projects</ButtonLink
            >
        </div>
        <ProjectsCarousel />
    </section>
</template>

<script setup>
import ButtonLink from '~/components/base/ButtonLink.vue';
import ProjectsCarousel from '~/components/home/ProjectsCarousel.vue';
</script>

<style scoped>
.projects::after,
.projects::before {
    content: '';
    position: absolute;
    left: 50%; /* Position the left edge at the 50% mark of the parent */
    transform: translateX(-50%); /* Shift the element back by half its width */
    width: calc(100% - 1rem);
    height: 1px;
    background-color: theme('colors.white / 10%');
}

.projects::after {
    top: 0;
}

.projects::before {
    bottom: 0;
}

@media screen and (min-width: 768px) {
    .projects::after,
    .projects::before {
        width: calc(100% - 2rem);
    }
}

@media screen and (min-width: 1216px) {
    .projects::after,
    .projects::before {
        width: 1216px;
    }
}
</style>
