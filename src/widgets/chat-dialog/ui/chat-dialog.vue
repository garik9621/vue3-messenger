<script setup lang="ts">
import { ChatEnterForm, ChatMessage } from '@entities/chat';
import { ref } from 'vue';

const messages = ref([])
const messagesDate = ref([])
const todayMessages = ref([]);
</script>

<template>
    <div>
        <div>
            <!-- previous days messages -->
            <div
                v-for="(date, idx) in messagesDate"
                :key="idx"
                class="chat-date-section"
            >
                <chat-message v-for="(item, index) in messages" :key="index" />
            </div>
            <!-- today messages -->
            <div class="chat-date-section">
                Today

                <chat-message v-for="(item, index) in todayMessages" :key="index" />
            </div>
        </div>

        <div>
            <chat-enter-form />
        </div>
    </div>
</template>

<style scoped>

</style>