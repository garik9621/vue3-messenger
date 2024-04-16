<script setup lang="ts">
import type { IChatMember } from '../models/types';
import { toRefs } from 'vue';

const emit = defineEmits(['open-dialog']);

const props = defineProps<{
    member: IChatMember;
}>();

const { member } = toRefs(props);
</script>

<template>
    <div @click.stop="emit('open-dialog')">
        <img :src="member.photo" alt="" />

        <div>{{ member.userName }}</div>
        <div>{{ member.userRating }}</div>
        <div>{{ member.lastMessageDate }}</div>
        <div>{{ member.lastMessageText }}</div>
    </div>
</template>

<style scoped></style>
