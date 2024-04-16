import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';
import type { IChatMessage, IChatMember } from './types';

export const useChatStore = defineStore('chat', () => {
    const dialogs: Ref<IChatMember[]> = ref([
        {
            id: '1',
            userName: 'Name F',
            userRating: 1,
            photo: '',
            lastMessageDate: '',
            lastMessageText: 'Lorem ipsum lorem ipsum',
        },
    ]);
    const openedDialogId: Ref<string | null> = ref(null);
    const openedDialogMessages: Ref<IChatMessage[]> = ref([
        {
            message: 'message',
            userId: '2',
            sendDate: '17789087',
        },
    ]);

    const getDialogs = () => {
        // dialogs.value = [
        //     {
        //         id: '1',
        //         userName: 'Name F',
        //         userRating: 1,
        //         photo: '',
        //         lastMessageDate: '',
        //         lastMessageText: 'Lorem ipsum lorem ipsum',
        //     },
        // ];
    };

    const getDialogMessages = (id: string) => {
        openedDialogMessages.value = [];
    };

    const setDialogs = (payload: IChatMember[]) => {
        // dialogs.value = payload;
    };

    // TODO: подумать, как организовать порядок вывода сообщений, чтобы они шли в нужном порядке
    const sendNewMessage = ({ message, userId }: { message: string; userId: string }) => {
        console.log('push');
        openedDialogMessages.value.push({
            message,
            sendDate: `${Date.now()}`,
            userId: userId,
        });
    };

    return {
        dialogs,
        openedDialogMessages,
        getDialogMessages,
        getDialogs,
        setDialogs,
        sendNewMessage,
    };
});
