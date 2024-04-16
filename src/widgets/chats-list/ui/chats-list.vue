<script setup lang="ts">
import { ChatMember, useChatStore } from '@entities/chat';

const { dialogs } = useChatStore();

const handleOpenDialog = (id: string) => {
    console.log('open dialog ', id);
};
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
