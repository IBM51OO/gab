<template>
    <div class="course-item" v-if="course" id="courseItem">
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
                        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H30V7H1V9Z" fill="#1969AD"/>
                        </svg>
                    </div>
                    <div class="course-item__next-button primary-button" v-if="currentPage !== course.pages.length" @click="changePage(currentPage + 1)">
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
import {computed, nextTick, onMounted, ref} from "vue";
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
    nextTick(() => {
        document.getElementById('courseItem').scrollIntoView({ behavior: "smooth", block: "start" });
    })
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
        font-family: 'Inter', sans-serif;
        line-height: 200%;
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
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    &__prev-button {
        border: 1px solid #1969AD;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        border-radius: 20px;
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
