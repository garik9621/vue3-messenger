<script setup lang="ts">
import { ref } from 'vue';
import { ChatMember } from '@entities/chat';

const chatMembers = ref([])
</script>

<template>
    <chat-member v-for="(item, index) in chatMembers" :key="index" />
</template>

<style scoped>

</style>