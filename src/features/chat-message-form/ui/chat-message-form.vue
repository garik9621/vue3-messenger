<script setup lang="ts">
import { ref, unref } from 'vue';
import { useChatStore } from '@entities/chat/models/useChatStore';

const { sendNewMessage } = useChatStore();

const messageModel = ref('');
const handleSubmitEvent = () => {
    console.log('submit');
    sendNewMessage({ message: unref(messageModel), userId: '1' });
};
</script>

<template>
    <form @submit.prevent="handleSubmitEvent">
        <textarea v-model="messageModel"></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style scoped></style>
