<template>
    <component :is="layoutComponent" v-if="isLayoutLoaded">
        <slot/>
    </component>
</template>
<script setup>
import {useMainStore} from "@/stores/main.js";
import {computed, defineAsyncComponent, ref} from "vue";
import axios from "axios";
import api from "@/services/client.js";
import {notify} from "@kyvg/vue3-notification";
import {useCookies} from "vue3-cookies";
const {cookies} = useCookies()
const isLayoutLoaded = ref(false);
const mainStore = useMainStore();
if (cookies.get("access_token")) {
    me();
} else {
    isLayoutLoaded.value = true;
}
async function me() {
    try {
        const r = await api.get('/me');
        mainStore.changeIsAuth(true)
        mainStore.setUser(r);
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
        cookies.set('access_token', '');
        mainStore.setUser('');
        mainStore.changeIsAuth(false);
    } finally {
        isLayoutLoaded.value = true;
    }
}

const isAuth = computed(() => mainStore.getIsAuth);
const layoutComponent = computed(() => {
    return mainStore.getIsAuth ?
        defineAsyncComponent(() => import('@/layouts/ProfileLayout.vue')) :
        defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'));
});
</script>
<style lang="scss">
.notification-content {
    font-size: 16px;
}
</style>
