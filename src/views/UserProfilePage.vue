<template>
    <div class="user-profile-wrapper">
        <div class="container">
            <div class="user-profile">
                <div class="user-profile__left-menu">
                    <left-menu />
                </div>
                <div class="user-profile__content">
                    <div class="user-profile__courses" v-if="currentMenuActive === 'my' || isMobile">
                        <div class="page-name">
                            My courses
                        </div>
                        <div class="user-profile__courses-empty" v-if="!courses.length">
                            <img src="../img/empty.png" alt="">
                            <div class="user-profile__courses-empty-label">
                                It's empty here for now. Purchase our courses, and they'll appear here!
                            </div>
                        </div>
                        <div class="user-profile__courses-list" v-else>
                            <div class="user-profile__course" v-for="item in courses" :key="item.img">
                                <div class="user-profile__course-info">
                                    <div class="user-profile__course-img">
                                        <img src="" alt="">
                                    </div>
                                    <div class="user-profile__course-title">
                                        {{ item.text }}
                                    </div>
                                </div>
                                <arrow-right class="breadcrumbs__arrow-right-icon" />
                            </div>
                        </div>
                    </div>
                    <div class="user-profile__account" v-if="currentMenuActive === 'details' || isMobile">
                        <div class="page-name">
                            Account details
                        </div>
                        <Form :validation-schema="schemaUser" @submit="onChange">
                            <div class="user-profile__first-name user-profile__input-field">
                                <div class="user-profile__first-name-label">
                                    First name
                                </div>
                                <Field name="firstName"/>
                                <ErrorMessage name="firstName"/>
                            </div>
                            <div class="user-profile__last-name user-profile__input-field">
                                <div class="user-profile__last-name-label">
                                    Last name
                                </div>
                                <Field name="lastName"/>
                                <ErrorMessage name="lastName"/>
                            </div>
                            <div class="user-profile__email user-profile__input-field">
                                <div class="user-profile__email-label">
                                    Email
                                </div>
                                <Field name="Email"/>
                                <ErrorMessage name="Email"/>
                            </div>
                            <div class="user-profile__old-password user-profile__input-field">
                                <div class="user-profile__old-password-label">
                                    Old password
                                </div>
                                <Field name="Email"/>
                                <ErrorMessage name="Email"/>
                            </div>
                            <div class="user-profile__password user-profile__input-field">
                                <div class="user-profile__password-label">
                                    New password
                                </div>
                                <Field name="password"/>
                                <ErrorMessage name="password"/>
                            </div>
                            <div class="user-profile__password-confirm user-profile__input-field">
                                <div class="user-profile__password-confirm-label">
                                    Confirm new password
                                </div>
                                <Field name="passwordConfirm"/>
                                <ErrorMessage name="passwordConfirm"/>
                            </div>
                            <button class="user-profile__save-changes">Save changes</button>
                        </Form>
                    </div>
                    <div class="user-profile__logout-wrapper" v-if="currentMenuActive === 'logout' || isMobile">
                        <div class="user-profile__logout-label">
                            Are you sure you want to exit your account?
                        </div>
                        <button class="user-profile__logout" @click="logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ErrorMessage, Field, Form} from "vee-validate";
import {computed, onMounted, reactive, ref} from "vue";
import ArrowRight from "@/img/svg/arrow-right.svg";
import {useMainStore} from "@/stores/main.js";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";
import LeftMenu from "@/components/LeftMenu.vue";
import api from "@/services/client.js";
const mainStore = useMainStore();
const currentMenuActive = computed(() => mainStore.getCurrentPersonalPage);
const isMobile = computed(() => window.innerWidth < 1024);
const router = useRouter();
const courses = ref([])
onMounted(() => {
    fetchMyCourses();
});
async function fetchMyCourses() {
    const res = await api.get('/my-courses');
    courses.value = res;
}
const  { cookies } = useCookies();
function logout() {
    mainStore.changeIsAuth(false);
    cookies.set("access_token", '');
    router.push({ name: 'sign-in'})
}
</script>
<style lang="scss">
.user-profile-wrapper {
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }

    padding-bottom: 50px;
}
.user-profile {
    @include mqm(1024) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    &__content {
        max-width: 860px;
        width: 100%;
        margin: 0 auto;
    }
    .page-name {
        margin-bottom: 0;
    }
    &__courses-list {
        margin-top: 30px;
    }
    &__courses {
        margin-top: 25px;
    }
    &__courses-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &__logout-label {
        display: none;
        @include mqm(1024) {
            display: block;
        }
    }
    &__courses-empty-label {
        max-width: 243px;
        text-align: center;
        margin-top: 28px;
        font-size: 14px;
        color: #000;
    }
    &__account {
        margin-top: 45px;
        form {
            @include mqm(1024) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
            }
        }
        input {
            width: 100%;
            margin-top: 8px;
            border: none;
            background-color: rgba(0, 0, 0, 0.05);
            height: 40px;
        }
    }
    &__input-field {
        margin-top: 20px;
    }
    &__save-changes, &__logout {
        border-radius: 10px;
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
        text-align: center;
        padding: 23px 0;
        border: none;
        width: 100%;
        font-size: 20px;
        font-weight: 500;
        color: #576C7E;
        line-height: 14px;
        margin-top: 30px;
    }
    &__logout {
        cursor: pointer;
        margin-top: 40px;
        @include mqm(1024) {
            max-width: 305px;
        }
    }
    &__course-info {
        display: flex;
        align-items: center;
    }
    &__course {
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        padding: 10px;
        border-radius: 15px;
        &:not(:first-child) {
            margin-top: 30px;
        }
        @include mqm(1024) {
            justify-content: space-between;
            padding: 10px 20px 10px 10px;
        }
    }
    &__course-title {
        padding-left: 20px;
        font-size: 16px;
        font-weight: 500;
        color: #000;
        padding-right: 40px;
        @include mqm(1024) {
            font-size: 20px;
            font-weight: 700;
        }
    }
    &__course-img {
        height: 70px;
        width: 70px;
        border-radius: 10px;
        flex: 0 0 auto;
        img {
            height: 100%;
            border-radius: 10px;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
