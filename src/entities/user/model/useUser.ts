import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUser = defineStore('user', () => {
    const isAuthorized = ref(false);
    const userId = ref('1');

    const setAuthorizedStatus = (value: boolean) => {
        isAuthorized.value = value;
    };

    return {
        isAuthorized,
        userId,
        setAuthorizedStatus,
    };
});
