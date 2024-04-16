import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';
import type { IChatMessage, IChatMember } from './types';

export const useChatStore = defineStore('chat', () => {
    const dialogs: Ref<IChatMember[]> = ref([]);
    const openedDialogId: Ref<string | null> = ref(null);
    const openedDialogMessages: Ref<IChatMessage[]> = ref([]);

    const getDialogs = () => {
        dialogs.value = [
            {
                id: '1',
                userName: 'Name F',
                userRating: 1,
                photo: '',
                lastMessageDate: '',
                lastMessageText: 'Lorem ipsum lorem ipsum',
            },
        ];
    };

    const getDialogMessages = (id: string) => {
        openedDialogMessages.value = [];
    };

    const setDialogs = (payload) => {
        dialogs.value = payload;
    };

    const sendNewMessage = async () => {
        await new Promise.resolve();
    };

    return {
        dialogs,
        getDialogMessages,
        getDialogs,
        setDialogs,
        sendNewMessage,
    };
});
