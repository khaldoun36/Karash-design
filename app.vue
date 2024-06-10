<template>
    <Header />
    <div class="content-grid full-width">
        <NuxtPage />
    </div>
    <Footer />
</template>
<script setup>
import Header from '~/components/header/Header.vue';
import Footer from '~/components/base/Footer.vue';
</script>
