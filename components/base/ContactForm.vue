<template>
    <section class="contact-form grid items-center pt-20 lg:pt-28">
        <div
            class="contact-details-container grid gap-8 self-end md:grid-cols-2 xl:col-start-2 xl:row-start-1 xl:grid-cols-1 xl:pl-28"
        >
            <div class="contact-details flex flex-col gap-2.5">
                <h2
                    class="mb-1.5 text-base font-semibold text-secondary-50 lg:text-lg"
                >
                    {{ $t('shared.form.title') }}
                </h2>
                <NuxtLink
                    to="mailto:mainbranch@karash.com"
                    class="contact-link flex items-center justify-between whitespace-nowrap text-base font-medium text-secondary-50 lg:text-lg"
                >
                    <span class="font-normal text-secondary-400"
                        >{{ $t('shared.form.email') }}:</span
                    >
                    <span class="mr-12"> mainbranch@karash.com</span>
                </NuxtLink>
                <NuxtLink
                    to="tel:009647503520001"
                    class="contact-link flex items-center justify-between whitespace-nowrap text-base font-medium text-secondary-50 lg:text-lg"
                >
                    <span class="font-normal text-secondary-400"
                        >{{ $t('shared.form.phone') }}:</span
                    >
                    <span
                        class="mr-12"
                        :class="{
                            'text-right': locale === 'ku' || locale === 'ar',
                        }"
                        style="direction: ltr !important"
                        >+964 750 352 0001</span
                    >
                </NuxtLink>
                <NuxtLink
                    to="tel:+9647504453841"
                    class="contact-link flex items-center justify-between whitespace-nowrap text-base font-medium text-secondary-50 lg:text-lg"
                >
                    <span class="font-normal text-secondary-400"
                        >{{ $t('shared.form.phone') }}:</span
                    >
                    <span
                        class="mr-12"
                        :class="{
                            'text-right': locale === 'ku' || locale === 'ar',
                        }"
                        style="direction: ltr !important"
                        >+964 750 445 3841</span
                    >
                </NuxtLink>
            </div>
            <div class="dministrative-hours flex flex-col gap-2.5">
                <h2
                    class="mb-1.5 text-base font-semibold text-secondary-50 lg:text-lg"
                >
                    {{ $t('shared.form.hours') }}
                </h2>
                <p class="text-base font-medium text-secondary-50 lg:text-lg">
                    <span class="font-normal text-secondary-400"
                        >{{ $t('shared.form.days') }}:</span
                    >
                    {{ $t('shared.form.time') }}
                </p>
            </div>
        </div>
        <Form :messagePlaceHolder="$t('shared.form.afterSaleMessage')" />
    </section>
</template>

<script setup>
import Form from '~/components/base/Form.vue';

const props = defineProps({
    messagePlaceHolder: {
        type: String,
        default: 'Message',
    },
});

const { locale } = useI18n();
</script>

<style scoped>
.contact-link {
    display: inline-grid;
    grid-template-columns: 60px 1fr;
    gap: 8px;
}

@media screen and (min-width: 1216px) {
    .contact-form {
        grid-template-columns: 1fr auto;
        gap: theme('spacing.8');
    }
}
</style>
