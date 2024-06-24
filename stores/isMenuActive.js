import { defineStore } from 'pinia';

export const useIsMenuActive = defineStore('isMenuActive', {
    state: () => {
        return { menuActive: false };
    },
    actions: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
    },
});
