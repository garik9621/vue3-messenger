import {defineStore} from "pinia";
import {ref} from "vue";

export const useUser = defineStore('user', () => {
    const isAuthorized = ref(false);

    const setAuthorizedStatus = (value: boolean) => {
        isAuthorized.value = value;
    }

    return {
        isAuthorized,
        setAuthorizedStatus,
    }
})