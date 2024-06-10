<template>
    <h1
        class="words-wrapper text-balance text-4xl font-semibold text-secondary-50 lg:text-6xl"
    >
        Crafting beautiful
        <span class="words">
            <span class="current" data-bg-color="#ffc703" data-color="#000"
                >kitchens</span
            >
            <span class="next" data-bg-color="#004e98" data-color="#fff"
                >homes</span
            >
            <span data-bg-color="#8cb369" data-color="#000">furniture</span>
        </span>
        since 2004
    </h1>
</template>

<script setup>
onMounted(() => {
    const wrapper = document.querySelector('.words');
    const words = Array.from(wrapper.querySelectorAll('span'));
    let currentIndex = 0;

    const updateWords = () => {
        const currentWord = words[currentIndex];
        const nextIndex = (currentIndex + 1) % words.length;
        const nextWord = words[nextIndex];

        currentWord.classList.remove('current');
        currentWord.classList.add('previous');
        nextWord.classList.remove('next');
        nextWord.classList.add('current');

        const nextNextIndex = (nextIndex + 1) % words.length;
        words[nextNextIndex].classList.add('next');

        // Remove previous class after animation to avoid buildup
        setTimeout(() => {
            currentWord.classList.remove('previous');
        }, 700);

        currentIndex = nextIndex;

        // Update the width for smooth transitions
        wrapper.style.setProperty('--width', `${nextWord.offsetWidth}px`);
    };

    // Initial setup
    words[0].classList.add('current');
    words[1].classList.add('next');
    wrapper.style.setProperty('--width', `${words[0].offsetWidth}px`);

    setInterval(() => {
        requestAnimationFrame(updateWords);
    }, 4000); // Animation interval
});
</script>

<style scoped>
.words-wrapper .words {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: var(--width);
    height: theme('spacing.10');
    color: theme('colors.secondary.50');
    box-sizing: content-box;
    transition: width 0.7s;
}

.words-wrapper .words span {
    position: absolute;
    top: 0;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.7s ease-in-out;
}

.words-wrapper .words span.current {
    opacity: 1;
}

.words-wrapper .words span.next,
.words-wrapper .words span.previous {
    opacity: 0;
}

@media screen and (min-width: 1024px) {
    .words-wrapper .words {
        height: 60px;
    }
}
</style>
