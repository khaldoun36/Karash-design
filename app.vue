<template>
    <Header />
    <div class="content-grid">
        <NuxtPage />
        <Footer />
    </div>
</template>
<script setup>
import Header from '~/components/header/Header.vue';
import Footer from '~/components/base/Footer.vue';
</script>
