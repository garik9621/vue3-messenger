<script setup lang="ts">
import type { IChatMessage } from '@entities/chat';
import { computed, toRefs, unref } from 'vue';
import { useUser } from '@entities/user/model/useUser';

const props = defineProps<{ message: IChatMessage }>();

const { message } = toRefs(props);

const { userId } = useUser();

const isCurrentUserMessage = computed(() => {
    return unref(message).userId === unref(userId);
});
</script>

<template>
    <div class="message" :class="{ 'message--current-user': isCurrentUserMessage }">
        <p>{{ message.message }}</p>
        <p>
            <i>{{ message.sendDate }}</i>
        </p>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
.message {
    &#{&}--current-user {
        text-align: right;
    }
}
</style>
