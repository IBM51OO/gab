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
    border: 1px solid #1A69AD;
    border-radius: 30px;
    margin-left: 30px;
    padding: 30px;
    position: relative;
    min-width: 271px;
    &:before {
        position: absolute;
        content: 'menu';
        display: block;
        left: -33px;
        writing-mode: vertical-lr;
        color: #1A69AD;
        font-size: 20px;
        top: 50%;
        transform: translate(0, -50%) rotate(180deg);
    }
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
            color: rgba(26, 105, 173, 0.5);
            &:not(:first-child) {
                margin-top: 30px;
            }
            &.active {
                color: #1A69AD;
            }
        }
    }
}
</style>
