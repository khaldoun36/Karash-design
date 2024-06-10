<template>
    <NuxtLink to="https://karashco.com/en">
        <article
            class="project-card relative flex aspect-video h-auto min-w-full flex-col justify-end gap-6 overflow-clip rounded-lg lg:p-6"
        >
            <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project image"
                class="absolute inset-0 -z-10 min-h-full min-w-full"
            />
            <div
                class="project-content max-w-fit space-y-3 rounded-md p-6 lg:space-y-4"
            >
                <p class="text-sm font-semibold text-secondary-400 lg:text-lg">
                    Kitchen Design
                </p>
                <h3
                    class="text-xl font-semibold text-secondary-50 hover:underline lg:text-4xl"
                >
                    The American Village Villas
                </h3>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup></script>

<style scoped>
.project-card {
    background: linear-gradient(
        to bottom,
        theme('colors.secondary.900/ 40%') 60%,
        theme('colors.secondary.900/ 90%')
    );
}
</style>
