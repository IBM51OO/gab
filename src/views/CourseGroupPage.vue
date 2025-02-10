<template>
    <div class="course-group" v-if="currentCourses">
        <div class="container">
            <div class="breadcrumbs">
                <router-link to="/courses">
                    <arrow-right class="breadcrumbs__arrow-left-icon" />
                    <div class="breadcrumbs__title">{{ currentCourses.group }}</div>
                </router-link>
            </div>
            <div class="course-group__list">
                <div class="course-group__course" v-for="course in currentCourses" :key="course.id" @click="router.push(`/course/${course.id}`)">
                    <div class="course-group__course-title">
                        {{ course.name }}
                    </div>
                    <div class="course-group__course-info">
                        <div class="course-group__course-price">
                            {{ course.prices.find((el) => el.currency === currentCurrency).amount }} {{ currentValue }}
                        </div>
                        <arrow-right class="course-group__arrow-right-icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArrowRight from "@/img/svg/arrow-right.svg";
import {computed, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import api from "@/services/client.js";
import {useMainStore} from "@/stores/main.js";
const route = useRoute();
const group = ref();
const courses = ref(null);
const mainStore = useMainStore();
const currentCourses = computed(() => courses.value && courses.value.filter((el) => el.group === route.params.id))
const currentCurrency = computed(() => mainStore.currency);
const currentValue = computed(() => currentCurrency.value === 'EUR' ? '€': '$');
async function fetchCourses() {
    courses.value = await api.get('/courses');
    console.log(courses.value)
}
const router = useRouter();
onMounted(() => {
    fetchCourses();
    // fetchCourseById(route.params.id);
})

</script>
<style lang="scss">
    .breadcrumbs {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
            font-size: 20px;
            font-weight: 500;
        }
        &__title {
            margin-left: 20px;
        }
        &__arrow-left-icon {
            transform: rotate(180deg);
        }
    }
    .course-group {
        .container {
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0 180px;
            }
        }
        .breadcrumbs {
            padding: 10px 0 30px 0;
        }
        &__course {
            cursor: pointer;
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            @include mqm(768) {
                margin-bottom: 30px;
            }
            @include mqm(1024) {
                padding: 60px 15px;
                margin-bottom: 30px;
            }
        }
        &__course-info {
            display: flex;
            align-items: center;
        }
        &__course-title {
            font-size: 20px;
            font-weight: 700;
            color: #000;
            max-width: 75%;
        }
        &__course-price {
            padding-right: 20px;
            color: #606060;
            font-size: 16px;
            font-family: 'Roboto-Italic';
        }
    }
</style>
