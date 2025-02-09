<template>
    <div class="course-detail" v-if="course && currentGroup">
        <div class="container">
            <div class="breadcrumbs">
                <router-link to="/courses">
                    <arrow-right class="breadcrumbs__arrow-left-icon" />
                    <div class="breadcrumbs__title">{{ currentGroup.name }}</div>
                </router-link>
            </div>
            <div class="course-detail__row">
                <div class="course-detail__left">
                    <div class="course-detail__title">
                        {{ course.name }}
                    </div>
                    <div class="course-detail__description">
                        <div class="course-detail__description-label">
                            Course Description:
                        </div>
                        <div class="course-detail__description-content">
                            {{ course.description }}
                        </div>
                    </div>
                    <div class="course-detail__add-to-cart course-detail__add-to-cart--desktop button--secondary" @click="addToCart">
                        Add to cart
                    </div>
                </div>
                <div class="course-detail__right">
                    <div class="course-detail__content-label">
                        Table of Contents:
                    </div>
                    <div class="course-detail__content">
                        What is Fitness?
                        Redefining Fitness for Beginners
                        Physical, Mental, and Emotional Dimensions
                        Common Myths and Misconceptions
                        The Benefits of Fitness
                        Immediate and Long-Term Physical Benefits
                        Mental Clarity and Emotional Balance
                        Fitness as a Tool for Disease Prevention
                        Preparing for Your Journey
                        Overcoming Self-Doubt and Fear
                        Creating a Supportive Environment
                        Basic Tools and Equipment for Beginners
                        Building Your Routine
                    </div>
                    <div class="course-detail__add-to-cart course-detail__add-to-cart--mobile button--secondary" @click="addToCart">
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArrowRight from "@/img/svg/arrow-right.svg";
import {useRoute, useRouter} from "vue-router";
import api from "@/services/client.js";
import {computed, onMounted, ref} from "vue";
import {notify} from "@kyvg/vue3-notification";
import {useMainStore} from "@/stores/main.js";
const router = useRouter();
const route = useRoute();
const course = ref();
const groups = ref();
const mainStore = useMainStore();
const currentGroup = computed(() => groups.value && groups.value.find((el) => el.id === course.value?.group))
onMounted(() => {
    fetchGroups();
    fetchPreviewCourse(route.params.id)
});
function setCourses(data) {
    groups.value = data;
}
async function fetchGroups() {
    const response = await api.get('/groups');
    setCourses(response);
}
const fetchPreviewCourse = async (id) => {
    course.value = await api.get(`/courses/${id}`);
}
const addToCart = async () => {
    if (!mainStore.isAuth) {
        router.push({name: 'sign-in'})
        return;
    }
    try {
        await api.put('/add-to-basket', {}, {
            params: {
                pid: course.value.id,
            }
        })
        await router.push('/cart')
        notify({
            type: 'success',
            text: 'Product successfully added to cart',
        })
    } catch (e) {
        notify({
            type: 'error',
            text: e?.response?.data?.detail,
        })
    }
}
</script>
<style lang="scss">
.course-detail {
    &__left {
        @include mqm(1024) {
            flex: 65%;
        }
    }
    &__title {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 700;
    }
    &__content {
        font-size: 14px;
    }
    &__row {
        @include mqm(1024) {
            display: flex;
            gap: 120px;
        }
    }
    &__right {
        @include mqm(1024) {
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding: 20px;
            flex: 35%;
        }
    }
    &__add-to-cart {
        margin-top: 50px;
        margin-bottom: 70px;
        &.button {
            &--secondary {
                cursor: pointer;
                font-size: 20px;
                border-radius: 10px;
                justify-content: center;
                align-items: center;
                height: 60px;
                background-color: #576C7E;
                color: #fff;
                max-width: 413px;
            }
        }
        &--desktop {
            display: none;
            @include mqm(1024) {
                display: flex;
            }
        }
        &--mobile {
            display: flex;
            @include mqm(1024) {
                display: none;
            }
        }
    }
    &__content-label {
        margin: 30px 0;
        font-size: 16px;
        color: #000;
        font-weight: 500;
        @include mqm(1024) {
            margin-top: 0;
        }
    }
    &__description-label {
        font-size: 16px;
        font-weight: 500;
    }
    &__description-content {
        margin-top: 20px;
        font-size: 14px;
    }
    .container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
}

</style>
