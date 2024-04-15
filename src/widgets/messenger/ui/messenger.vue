<script setup lang="ts">
import { ChatDialog } from '@widgets/chat-dialog';
import { ChatsList } from '@widgets/chats-list';
</script>

<template>
    <div class="messenger">
        <div class="messenger__dialogs-list">
            <chats-list />
        </div>
        <div class="messenger__dialog">
            <chat-dialog />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.messenger {
    display: grid;
    grid-template-columns: 500px 1fr;
}
</style>