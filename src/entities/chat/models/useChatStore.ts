import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatStore = defineStore('chat', () => {
    const dialogs = ref([]);

    const getDialogs = async () => {
        await Promise.resolve();

        dialogs.value = [];
    }

    const getDialogMessages = async (id) => {
        await new Promise.resolve();
    }

    const setDialogs = (payload) => {
        dialogs.value = payload;
    }

    const sendNewMessage = async () => {
        await new Promise.resolve();
    }

    return {
        dialogs,
        getDialogMessages,
        getDialogs,
        setDialogs,
        sendNewMessage
    }
})