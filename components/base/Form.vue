<template>
    <form @submit.prevent="submitForm" class="mt-20 grid grid-cols-1 gap-8">
        <input
            type="text"
            name="name"
            v-model="name"
            class="border-b border-white/10 bg-transparent p-4 text-base text-secondary-400 focus:rounded-md focus:outline-none focus:outline-primary-200/40 lg:text-lg"
            placeholder="Full Name"
            required
        />

        <div class="contact-methods grid grid-cols-1 gap-8 xl:grid-cols-2">
            <input
                type="email"
                name="email"
                v-model="email"
                class="border-b border-white/10 bg-transparent p-4 text-base text-secondary-400 focus:rounded-md focus:outline-none focus:outline-primary-200/40 lg:text-lg"
                placeholder="Emaill Address"
                required
            />
            <input
                type="number"
                name="phoneNumber"
                v-model="phoneNumber"
                class="border-b border-white/10 bg-transparent p-4 text-base text-secondary-400 focus:rounded-md focus:outline-none focus:outline-primary-200/40 lg:text-lg"
                placeholder="Phone Number"
                required
            />
        </div>
        <textarea
            name="message"
            v-model="message"
            class="border-b border-white/10 bg-transparent px-4 pt-4 text-base text-secondary-400 focus:rounded-md focus:outline-none focus:outline-primary-200/40 lg:text-lg"
            :placeholder="messagePlaceHolder"
            required
        />
        <button
            type="submit"
            class="btn primary flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-sm pl-6 pr-[19px] text-sm font-medium text-secondary-50 transition-colors active:scale-95"
        >
            Send Message
        </button>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const message = ref('');

const submitForm = async () => {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            message: message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
};

const props = defineProps({
    messagePlaceHolder: {
        type: String,
        default: 'Message',
    },
});
</script>
<style scoped></style>
