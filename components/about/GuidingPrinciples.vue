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

const accordionItems = [
    {
        value: 'item-1',
        title: 'Field of Work',
        content: [
            'We stand as a leading manufacturer in Iraq, specializing in crafting home furnishings, kitchens, interior decor, and wood and artificial alabaster. We proudly hold exclusive international partnerships with commercial agencies in the sector, introducing unique products to the Iraqi market that were previously unavailable.',
            'Our specialization spans across a comprehensive range of kitchen styles, including modern, classic, semi-classic, and luxury designs. Additionally, we excel in creating bespoke interior decor, doors, furnishings for educational and healthcare facilities, bedrooms, and exquisite artificial alabaster products. Leveraging prestigious global partnerships, we ensure top-notch quality and distinctiveness in areas such as lighting, wallpapers, and accessories sourced from esteemed Turkish and Italian origins.',
        ],
    },
    {
        value: 'item-2',
        title: 'Goal',
        content: [
            'Our primary objective is to solidify our name through the exceptional works we provide to our clients in Iraq and abroad. Guided by a well-organized plan, we seek to expand our activities, delivering our services across all parts Iraq, and beyond.',
            'Our methodology revolves around a client-centric process that sets the foundation for excellence. We believe in forging collaborative partnerships with our clients, understanding their unique needs, and continuously refining our approach through feedback loops. By embracing innovation, adaptability, and open communication, we ensure that our final creations surpass expectations, embodying the shared vision of our clients and our commitment to excellence.',
        ],
    },
    {
        value: 'item-3',
        title: 'Vision',
        content: [
            'We strive to establish ourselves as the premier choice in the world of home furniture, kitchen design, and interior decor. Our methodology is rooted in delivering exceptional services with the utmost professionalism and industry-leading practices.',
            "Central to our vision is the aspiration to extend our reach far and wide, ensuring that every space we touch reflects our dedication to quality and customer satisfaction. By embracing innovation, adaptability, and open communication, we aim to consistently exceed expectations and bring our clients' visions to life.",
        ],
    },
    {
        value: 'item-4',
        title: 'Quality',
        content: [
            "Our approach prioritizes quality and aesthetics, which we steadfastly uphold. We are dedicated to enhancing quality and precision in all our endeavors through a specialized process that continually updates to meet our customers' diverse needs. With extensive experience in designing, manufacturing, and executing home furniture projects, including kitchens and decor, we have been a trusted name in the industry since 2004.",
            'Our commitment to excellence is reflected in our rigorous quality policy, which involves continuous inspection, stringent work control, and progress monitoring. We are deeply committed to ensuring customer satisfaction with the services we provide, always striving to exceed expectations through our attention to detail and dedication to superior craftsmanship.',
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
