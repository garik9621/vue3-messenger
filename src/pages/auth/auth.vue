<script setup lang="ts">
import { useUser } from '@entities/user/model/useUser';
import DefaultLayout from '@pages/layout/ui/default-layout.vue';

const { isAuthorized, setAuthorizedStatus } = useUser();
</script>

<template>
    <default-layout>
        <main>authorize</main>
        <button @click="setAuthorizedStatus(!isAuthorized)">
            set {{ isAuthorized ? 'unauthorized' : 'authorized' }} status
        </button>
    </default-layout>
</template>
