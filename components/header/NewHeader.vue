<template>
    <header
        class="header_root full-width content-grid fixed left-0 right-0 top-0 z-50 py-4"
        :class="{ active: isBlurActive }"
    >
        <div class="header-layout flex items-center justify-between gap-8">
            <NuxtLink :to="localePath('/')" class="bg-dark">
                <KarashLogo />
            </NuxtLink>
            <NewNavbar />
            <div class="header-cta flex items-center gap-8">
                <div
                    class="separator hidden h-6 w-[1px] bg-secondary-400 lg:block"
                    aria-hidden="true"
                ></div>
                <LanguageSelect />
                <ButtonLink
                    :to="localePath(`/contact-us`)"
                    class="primary hidden lg:flex"
                    >Contact us</ButtonLink
                >
                <DrawerButton />
            </div>
        </div>
    </header>
</template>

<script setup>
import KarashLogo from '~/components/base/KarashLogo.vue';
import LanguageSelect from '~/components/base/LanguageSelect.vue';
import ButtonLink from '~/components/base/ButtonLink.vue';
import NewNavbar from './NewNavbar.vue';
import DrawerButton from './DrawerButton.vue';

const localePath = useLocalePath();

const { y } = useWindowScroll();

const isBlurActive = ref(false);

onMounted(() => {
    watchEffect(() => {
        if (y.value > 20) {
            isBlurActive.value = true;
        } else {
            isBlurActive.value = false;
        }
    });
});
</script>

<style scoped>
.header_root.active::after {
    content: '';
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;

    z-index: -1;

    -webkit-backdrop-filter: blur(theme('backdropBlur.md'));

    background-color: theme('colors.secondary.700/10%');
    backdrop-filter: blur(theme('backdropBlur.md'));
}
</style>
