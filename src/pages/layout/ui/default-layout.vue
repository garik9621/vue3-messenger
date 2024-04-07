<script setup lang="ts">
import PageFooter from '@shared/ui/page-footer/page-footer.vue';
import PageHeader from '@shared/ui/page-header/page-header.vue';
</script>

<template>
    <page-header />
    default layout
    <main>
        <slot />
    </main>

    <page-footer />
</template>

<style scoped></style>
