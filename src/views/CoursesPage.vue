<template>
    <div class="courses">
        <div class="courses__container">
            <div class="page-name">
                Courses
            </div>
            <div class="courses__list">
                <div class="course-item" v-for="course in courses" :key="course.id" @click="router.push(`/course-group/${course.id}`)">
                    <div class="course-item__content">
                        <div class="course-item__image" v-if="course.images.length">
                            <img :src="`${BaseUrl}/image/${course.images[0]}`" alt="">
                        </div>
                        <div class="course-item__title">
                            {{ course.name }}
                        </div>
                    </div>
                    <arrow-right class="course-item__arrow-right-icon" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import ArrowRight from '@/img/svg/arrow-right.svg';
    import {onMounted, ref} from "vue";
    import api from "@/services/client.js";
    import {useRouter} from "vue-router";
    const courses = ref();
    const BaseUrl = ref(import.meta.env.VITE_BASE_API);
    const router = useRouter();
    async function fetchCourses() {
        const response = await api.get('/groups');
        setCourses(response);
    }
    function setCourses(data) {
        courses.value = data;
    }
    onMounted(() => {
        fetchCourses();
    })
</script>
<style lang="scss">
.courses {
    .page-name {
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 30px 0;
        line-height: 19px;
        color: #000000;
    }
    &__container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 180px;
        }
    }
    .course-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        cursor: pointer;
        &:not(:first-child) {
            margin-top: 20px;
        }
        &__title {
            font-size: 20px;
            font-weight: 700;
        }
        &__content {
            display: flex;
            align-items: center;
        }
        &__image {
            padding-right: 15px;
            height: 100px;
            img {
                border-radius: 10px;
                height: 100%;
            }
        }
    }
}
</style>
