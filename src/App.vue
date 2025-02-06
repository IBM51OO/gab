<script setup>
import { RouterView } from 'vue-router'
import AppLayout from "@/layouts/AppLayout.vue";
import {Notifications} from "@kyvg/vue3-notification";
</script>

<template>
    <AppLayout>
        <router-view />
        <notifications />
    </AppLayout>
</template>
