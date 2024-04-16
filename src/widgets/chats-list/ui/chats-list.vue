<script setup lang="ts">
import { ChatMember, useChatStore } from '@entities/chat';
import { onMounted } from 'vue';

const { dialogs, getDialogs } = useChatStore();

const handleOpenDialog = (id: string) => {
    console.log('open dialog ', id);
};

onMounted(() => {
    getDialogs();
});
</script>

<template>
    <chat-member
        v-for="(item, index) in dialogs"
        :key="index"
        :member="item"
        @open-dialog="() => handleOpenDialog(item.id)"
    />
</template>

<style scoped></style>
