<template>
    <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
        <div class="full-width content-grid">
            <NewHeader />
            <NuxtPage />
            <Footer />
        </div>
    </Html>
</template>
<script setup>
import Footer from '~/components/base/Footer.vue';
import NewHeader from './components/header/NewHeader.vue';

const head = useLocaleHead({
    addDirAttribute: true, // Adds dir
    addSeoAttributes: true, // Adds lang
});

const htmlAttrs = computed(() => head.value.htmlAttrs);
</script>

<style></style>
