<template>
    <main
        class="full-width content-grid hero-section relative pb-40 pt-[232px] 2xl:pb-56 2xl:pt-[300px]"
    >
        <div
            class="img-container full-width absolute inset-0 -z-10 h-full w-full overflow-clip"
        >
            <NuxtImg
                src="https://images.unsplash.com/photo-1604943963840-a18fe96a6322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="kitchen design"
                class="h-full w-full object-cover brightness-[30%]"
                preload
                format="webp"
            />
            <NuxtImg
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Home decor"
                class="h-full w-full object-cover brightness-[30%]"
                preload
                format="webp"
            />
            <NuxtImg
                src="https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?q=80&w=2183&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="furniture design"
                class="h-full w-full object-cover brightness-[30%]"
                preload
                format="webp"
            />
        </div>

        <HomeTextFlip />
        <p class="mt-4 max-w-[65ch] text-base text-secondary-400 lg:text-lg">
            Transform your space into a breathtaking work of art with Karash
            Company. Where creativity, innovation, and precision craftsmanship
            converge.
        </p>
        <div class="hero-btn-container mt-8 flex items-center">
            <BaseButtonLink class="primary">Contact us</BaseButtonLink>
            <BaseButtonLink class="secondary">View projects</BaseButtonLink>
        </div>
    </main>
</template>

<script setup>
onMounted(() => {
    const images = document.querySelectorAll('.img-container img');
    let currentIndex = 0;

    // Set the initial visibility
    images[currentIndex].style.opacity = 1;

    setInterval(() => {
        // Hide the current image
        images[currentIndex].style.opacity = 0;

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].style.opacity = 1;
    }, 4000); // 8 seconds
});
</script>

<style scoped>
.img-container img {
    position: absolute; /* Ensure absolute positioning */
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0; /* Start with all images hidden */
    transition: opacity 1s ease-in-out; /* Smooth transition */
}
</style>
