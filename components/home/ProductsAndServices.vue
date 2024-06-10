<template>
    <section class="py-20 lg:py-28">
        <AccordionRoot>
            <AccordionItem>
                <AccordionHeader>
                    <AccordionTrigger />
                </AccordionHeader>
                <AccordionContent />
            </AccordionItem>
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
        title: 'Stylish kitchen and furniture designs',
        content:
            'Our company manufactures a diverse range of kitchen styles and interior furnishings. We offer exclusive partnerships with premium turkish and italian brands for lighting, wallpapers, and accessories, ensuring high-quality specifications across our offerings.',
        imageURL:
            'https://unsplash.com/photos/white-and-brown-kitchen-cabinet--aDGbdTsBZg',
    },
];
</script>

<style scoped></style>
