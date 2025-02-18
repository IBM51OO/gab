<template>
    <div class="course-detail" v-if="course && currentGroup">
        <div class="container">
            <div class="breadcrumbs">
                <router-link to="/courses">
                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L2 11L12 21" stroke="#2E79B9" stroke-width="2"/>
                    </svg>
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
                    <div class="course-detail__add-to-cart course-detail__add-to-cart--desktop primary-button-hover" @click="addToCart">
                        Add to cart
                    </div>
                </div>
                <div class="course-detail__right">
                    <div class="course-detail__content-label">
                        Table of Contents:
                    </div>
                    <div class="course-detail__content" v-html="course.content" />
                </div>
                <div class="course-detail__add-to-cart course-detail__add-to-cart--mobile primary-button-hover" @click="addToCart">
                    Add to cart
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
    .breadcrumbs {
        background: #1969AD;
        font-style: italic;
        font-family: "AtkinsonHyperlegible", serif;
        font-weight: 700;
        background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    margin-top: 20px;
    @include mqm(1024) {
        margin-top: 30px;
    }
    &__left {
        @include mqm(1024) {
            flex: 65%;
        }
    }
    &__title {
        margin-top: 10px;
        font-size: 24px;
        line-height: 50px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        @include mqm(1024) {
            font-size: 50px;
        }
    }
    &__description-label {
        font-size: 18px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        margin-top: 40px;
    }
    &__content {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
    }
    &__row {
        @include mqm(1024) {
            display: flex;
            gap: 120px;
        }
    }
    &__right {
        margin-top: 30px;
        padding: 1px 20px 30px 20px;
        @include mqm(1024) {
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding: 20px;
            flex: 35%;
            margin-top: 0;
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
            max-width: 413px;
            text-align: center;
            @include mqm(1024) {
                display: flex;
                justify-content: center;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 20px;
                padding: 14px 0;
            }
        }
        &--mobile {
            display: flex;
            width: 100%;
            max-width: 100% !important;
            justify-content: center;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 20px;
            padding: 14px 0;
            margin-bottom: 40px;
            @include mqm(1024) {
                display: none;
            }
        }
    }
    &__content-label {
        margin: 30px 0;
        font-size: 24px;
        color: #fff;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        @include mqm(1024) {
            margin-top: 0;
        }
    }
    &__content {
        color: #fff;
    }
    &__right {
        border-radius: 30px;
        background: linear-gradient(90deg, rgba(26,105,173,1) 0%, rgba(11,43,71,1) 100%);
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
