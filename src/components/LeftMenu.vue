<template>
    <div class="left-menu">
        <ul class="left-menu__list">
            <li class="left-menu__list-item" :class="{'active': currentPersonalPage === 'my'}" @click="changeCurrentPage('my')">
                My courses
            </li>
            <li class="left-menu__list-item" :class="{'active': currentPersonalPage === 'details'}" @click="changeCurrentPage('details')">
                Account details
            </li>
            <li class="left-menu__list-item" :class="{'active': currentPersonalPage === 'logout'}" @click="changeCurrentPage('logout')">
                Log out
            </li>
        </ul>
    </div>
</template>
<script setup>
import {computed, ref} from "vue";
import {useMainStore} from "@/stores/main.js";
import {useRoute} from "vue-router";
const mainStore = useMainStore();
const route = useRoute()
const currentPersonalPage = computed(() => mainStore.getCurrentPersonalPage);
const changeCurrentPage = (name) => {
    mainStore.changeCurrentPersonalPage(name);
}
</script>
<style lang="scss">
.left-menu {
    display: none;
    @include mqm(1024) {
        display: block;
    }
    &__list {
        list-style-type: none;
        padding-left: 0;
        li {
            font-size: 20px;
            cursor: pointer;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.3);
            margin-top: 30px;
            &.active {
                color: #000;
            }
        }
    }
}
</style>
