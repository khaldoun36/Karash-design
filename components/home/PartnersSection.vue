<template>
    <section
        class="full-width content-grid items-center justify-center space-y-5 pt-20 lg:pt-28"
    >
        <h2
            class="text-center text-2xl font-semibold text-secondary-50 lg:text-4xl"
        >
            {{ $t('home_partners') }}
        </h2>
        <LogoMaequee>
            <Logo>
                <img
                    src="public/agency-logos/DuPont_logo.png"
                    alt="Agency Logo"
                />
            </Logo>
            <Logo>
                <img
                    src="public/agency-logos/logo-skai.png"
                    alt="Agency Logo"
                />
            </Logo>
            <Logo>
                <img
                    src="public/agency-logos/logo-test.png"
                    alt="Agency Logo"
                />
            </Logo>
            <Logo>
                <img src="public/agency-logos/poliya_w.png" alt="Agency Logo" />
            </Logo>
            <Logo>
                <img
                    src="public/agency-logos/S-Luxury-Logo.png"
                    alt="Agency Logo"
                /> </Logo
            ><Logo>
                <img src="public/agency-logos/silka.png" alt="Agency Logo" />
            </Logo>
        </LogoMaequee>
    </section>
</template>

<script setup>
import LogoMaequee from '~/components/base/LogoMaequee.vue';
import Logo from '~/components/base/Logo.vue';
</script>

<style scoped></style>
