<template>
    <section
        class="grid auto-rows-fr content-center gap-8 py-20 md:grid-cols-2 lg:py-28"
        id="products-and-services"
    >
        <AccordionRoot
            default-value="item-1"
            type="single"
            :collapsible="true"
            class="flex flex-col items-start gap-8"
        >
            <template v-for="(item, index) in accordionItems" :key="item.value">
                <AccordionItem
                    class="flex min-w-full flex-col gap-8 rounded-md border border-white/10 p-5 md:rounded-none md:border-0 md:border-b md:p-6"
                    :value="item.value"
                >
                    <AccordionHeader>
                        <AccordionTrigger
                            class="AccordionTrigger grid min-w-full items-center justify-between gap-8"
                            style="grid-template-columns: 1fr 24px"
                            @click="handleClick(index)"
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
                        class="AccordionContent text-base text-secondary-400"
                    >
                        <div class="content">
                            <img
                                :src="item.imageURL"
                                :alt="`illustrative photo for ${item.title}`"
                                class="mb-6 aspect-[4/3] h-auto w-full overflow-clip rounded-md object-cover md:hidden"
                            />
                            <p class="max-w-[45ch]">{{ item.content }}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </template>
        </AccordionRoot>

        <transition name="slide-fade" mode="out-in">
            <img
                :src="accordionItems[imageIndex].imageURL"
                alt="service image"
                class="hidden aspect-[4.5/5] h-auto min-w-full overflow-clip object-cover md:block"
                ref="serviceImage"
                :key="imageIndex"
            />
        </transition>
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
        title: `${t('home_services.item_1.title')}`,
        content: `${t('home_services.item_1.description')}`,
        imageURL: '/images/products_and_services/kitchens.jpeg',
    },
    {
        value: 'item-2',
        title: `${t('home_services.item_2.title')}`,
        content: `${t('home_services.item_2.description')}`,
        imageURL: '/images/products_and_services/interiors.jpeg',
    },
    {
        value: 'item-3',
        title: `${t('home_services.item_3.title')}`,
        content: `${t('home_services.item_3.description')}`,
        imageURL: '/images/products_and_services/wood.jpeg',
    },
];

let serviceImage = ref(null);
let imageIndex = ref(0);

const handleClick = (index) => {
    imageIndex.value = index;
};
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
