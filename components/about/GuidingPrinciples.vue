<template>
    <section class="space-y-16 py-20 lg:py-28">
        <h2 class="text-3xl font-semibold text-secondary-50 lg:text-5xl">
            Our Guiding Principles
        </h2>
        <AccordionRoot
            default-value="item-1"
            type="single"
            :collapsible="true"
            class="flex flex-col items-start gap-8 md:gap-0"
        >
            <template v-for="(item, index) in accordionItems" :key="item.value">
                <AccordionItem
                    class="flex min-w-full flex-col justify-center rounded-md border border-white/10 p-5 md:rounded-none md:border-0 md:border-t md:p-6"
                    :value="item.value"
                >
                    <AccordionHeader>
                        <AccordionTrigger
                            class="AccordionTrigger mt-8 grid min-w-full items-center justify-between gap-8"
                            style="grid-template-columns: 1fr 24px"
                        >
                            <h4
                                class="text-balance text-start text-2xl font-semibold text-secondary-50 lg:text-3xl"
                            >
                                {{ item.title }}
                            </h4>
                            <button class="morph-icon">
                                <span></span>
                                <span></span>
                            </button>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent
                        class="AccordionContent mt-8 flex flex-col items-end gap-6 text-base text-secondary-400"
                    >
                        <p
                            class="max-w-[45ch]"
                            v-for="(content, index) in item.content"
                            :key="item.value"
                        >
                            {{ content }}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </template>
        </AccordionRoot>
    </section>
</template>

<script setup>
import {
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
} from 'radix-vue';

const { t } = useI18n();

const accordionItems = [
    {
        value: 'item-1',
        title: `${t('pages.about.sections.guidingPrinciples.fieldOfWork.title')}`,
        content: [
            `${t('pages.about.sections.guidingPrinciples.fieldOfWork.paragraphOne')}`,
            `${t('pages.about.sections.guidingPrinciples.fieldOfWork.paragraphTwo')}`,
        ],
    },
    {
        value: 'item-2',
        title: `${t('pages.about.sections.guidingPrinciples.goal.title')}`,
        content: [
            `${t('pages.about.sections.guidingPrinciples.goal.paragraphOne')}`,
            `${t('pages.about.sections.guidingPrinciples.goal.paragraphTwo')}`,
        ],
    },
    {
        value: 'item-3',
        title: `${t('pages.about.sections.guidingPrinciples.vision.title')}`,
        content: [
            `${t('pages.about.sections.guidingPrinciples.vision.paragraphOne')}`,
            `${t('pages.about.sections.guidingPrinciples.vision.paragraphTwo')}`,
        ],
    },
    {
        value: 'item-4',
        title: `${t('pages.about.sections.guidingPrinciples.quality.title')}`,
        content: [
            `${t('pages.about.sections.guidingPrinciples.quality.paragraphOne')}`,
            `${t('pages.about.sections.guidingPrinciples.quality.paragraphTwo')}`,
        ],
    },
];
</script>

<style scoped>
.AccordionContent {
    overflow: clip;
    will-change: height;
}
.AccordionContent[data-state='open'] {
    animation: slideDown 300ms ease-in-out;
}

.AccordionTrigger[data-state='open'] > .AccordionChevron {
    transform: rotate(180deg);
}
.AccordionContent[data-state='closed'] {
    animation: slideUp 300ms ease-in-out;
}

@keyframes slideDown {
    from {
        height: 0;
    }
    to {
        height: var(--radix-accordion-content-height);
    }
}

@keyframes slideUp {
    from {
        height: var(--radix-accordion-content-height);
    }
    to {
        height: 0;
    }
}

.morph-icon {
    color: theme('colors.secondary.50');
    width: 32px;
    height: 32px;
    border: 0;
    font-size: 1em;
    position: relative;
}

.morph-icon span {
    position: absolute;
    transition: 300ms;
    background: theme('colors.secondary.50');
    border-radius: 2px;
}

.morph-icon span:first-child {
    top: 25%;
    bottom: 25%;
    width: 10%;
    left: 45%;
}

.morph-icon span:last-child {
    left: 25%;
    right: 25%;
    height: 10%;
    top: 45%;
}

.AccordionTrigger[data-state='open'] > .morph-icon span {
    transform: rotate(90deg);
}

.AccordionTrigger[data-state='open'] > .morph-icon span:last-child {
    left: 50%;
    right: 50%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 300ms ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}
</style>
