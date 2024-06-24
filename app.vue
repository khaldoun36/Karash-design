<template>
    <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
        <Header />
        <div class="content-grid">
            <NuxtPage />
            <Footer />
        </div>
    </Html>
</template>
<script setup>
import Header from '~/components/header/Header.vue';
import Footer from '~/components/base/Footer.vue';

const { locale, setLocale } = useI18n();

const head = useLocaleHead({
    addDirAttribute: true, // Adds dir
    addSeoAttributes: true, // Adds lang
});

const htmlAttrs = computed(() => head.value.htmlAttrs);
</script>

<style></style>
