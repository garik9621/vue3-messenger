<script setup lang="ts">
import Sidebar from '@shared/ui/sidebar/sidebar.vue';
import PageFooter from '@shared/ui/page-footer/page-footer.vue';
import PageHeader from '@shared/ui/page-header/page-header.vue';
</script>

<template>
    <page-header />
    sidebar layout
    <div>
        <sidebar />
        <div>
            <main>
                <slot />
            </main>
            <page-footer />
        </div>
    </div>
</template>

<style scoped></style>
