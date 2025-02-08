<template>
    <div class="course-item" v-if="course">
        <div class="container">
            <div class="course-item__wrapper">
                <div class="course-item__name">
                    {{ course.name }}
                </div>
                <div class="course-item__title">
                    {{ currentPageContent.title }}
                </div>
                <div class="course-item__content" v-html="currentPageContent.text" />
                <div class="course-item__buttons">
                    <div class="course-item__prev-button" v-if="currentPage > 1" @click="changePage(currentPage - 1)">
                        <PrevIcon />
                    </div>
                    <div class="course-item__next-button" v-if="currentPage !== course.pages.length" @click="changePage(currentPage + 1)">
                        Next
                    </div>
                </div>
                <div class="course-item__pages-length">
                    {{currentPage}}/{{course.pages.length}}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PrevIcon from "@/img/svg/prev.svg?component";
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import api from "@/services/client.js";
import {notify} from "@kyvg/vue3-notification";
const route = useRoute();
const currentPage = ref(1);
const course = ref();
const currentPageContent = computed(() => course.value && course.value?.pages[currentPage.value - 1])
onMounted(() => {
    fetchCurse(route.params.id);
});
const changePage = (page) => {
    currentPage.value = page;
}
const fetchCurse = async (id) => {
    try {
        course.value = await api.get(`/my-courses/${id}`);
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
</script>
<style lang="scss" scoped>
.course-item {
    padding-top: 50px;
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            max-width: 630px;
            margin: 0 auto;
        }
    }
    &__name {
        color: #000;
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        @include mqm(1024) {
            font-size: 14px;
            text-align: center;
        }
    }
    &__title {
        font-weight: 700;
        margin-top: 10px;
        text-align: left;
        font-size: 30px;
        @include mqm(1024) {
            font-size: 50px;
            text-align: center;
        }
    }
    &__content {
        font-size: 14px;
        margin-top: 12px;
        @include mqm(1024) {
            font-size: 16px;
            margin-top: 0;
        }
    }
    &__buttons {
        display: flex;
        margin-top: 40px;
        height: 60px;
        @include mqm(1024) {
            padding: 0 90px;
        }
    }
    &__next-button {
        background-color: #576C7E;
        height: 60px;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #fff;
        font-size: 20px;
    }
    &__prev-button {
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        border-radius: 10px;
        margin-right: 20px;
        width: 100%;
        max-width: 55px;
        @include mqm(1024) {
            max-width: 90px;
        }
    }
    &__pages-length {
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
    }
}
</style>
