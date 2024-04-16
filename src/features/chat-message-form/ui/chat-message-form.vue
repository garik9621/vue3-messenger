<script setup lang="ts">
import { ref, unref } from 'vue';
import { useChatStore } from '@entities/chat/models/useChatStore';

const { sendNewMessage } = useChatStore();

const messageModel = ref('');
const handleSubmitEvent = () => {
    sendNewMessage(unref(messageModel));
};
</script>

<template>
    <form @submit.prevent="handleSubmitEvent">
        <textarea v-model="messageModel"></textarea>
        <button type="submit"></button>
    </form>
</template>

<style scoped></style>
