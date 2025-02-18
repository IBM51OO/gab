<script setup>
import { RouterView } from 'vue-router'
import AppLayout from "@/layouts/AppLayout.vue";
import {Notifications} from "@kyvg/vue3-notification";
import {container as WidgetContainerModal} from "jenesius-vue-modal";
</script>

<template>
    <AppLayout>
        <widget-container-modal/>
        <router-view />
        <notifications />
    </AppLayout>
</template>
<style lang="scss">
.modal-container {
    z-index: 9;
}
</style>
