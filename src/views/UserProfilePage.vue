<template>
    <div class="user-profile-wrapper">
        <div class="container">
            <div class="user-profile">
                <div class="user-profile__left-menu">
                    <left-menu />
                </div>
                <div class="user-profile__content">
                    <div class="user-profile__courses" v-if="currentMenuActive === 'my' || isMobile">
                        <div class="user-profile__courses-empty" v-if="!courses.length">
                            <img src="../img/empty.png" alt="">
                            <div class="user-profile__courses-empty-label">
                                It's empty here for now. Purchase our courses, and they'll appear here!
                            </div>
                            <div class="user-profile__courses-empty-button primary-button">
                                Explore Courses
                            </div>
                        </div>
                        <div class="user-profile__courses-list" v-else>
                            <div class="user-profile__course" v-for="item in courses" :key="item.img" @click="router.push(`/course/${item.id}/detail`)">
                                <div class="user-profile__course-info">
                                    <div class="user-profile__course-img">
                                        <img :src="`${BaseUrl}/image/${item.images[0]}`" alt="">
                                    </div>
                                    <div class="user-profile__course-title">
                                        {{ item.name }}
                                    </div>
                                </div>
                                <div class="user-profile__course-right">
                                    <div class="user-profile__course-price">
                                        {{ item.prices.find((el) => el.currency === currentCurrency).amount }} {{ currentValue }}
                                    </div>
                                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L11 11L1 21" stroke="black"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user-profile__account" v-if="currentMenuActive === 'details' || isMobile">
                        <div class="page-name">
                            Account details
                        </div>
                        <Form>
                            <div class="user-profile__first-name user-profile__input-field">
                                <div class="user-profile__first-name-label">
                                    First name
                                </div>
                                <Field name="firstName" v-model="userProfile.firstName"/>
                                <ErrorMessage name="firstName"/>
                            </div>
                            <div class="user-profile__last-name user-profile__input-field">
                                <div class="user-profile__last-name-label">
                                    Last name
                                </div>
                                <Field name="lastName" v-model="userProfile.lastName"/>
                                <ErrorMessage name="lastName"/>
                                <span @click="changeName" v-if="userProfile.firstName !== user.first_name || userProfile.lastName !== user.second_name">Change</span>
                            </div>
                            <div class="user-profile__email user-profile__input-field">
                                <div class="user-profile__email-label">
                                    Email
                                </div>
                                <Field name="Email" v-model="userProfile.email"/>
                                <div class="user-profile__email-label" v-if="isEmailCodeSend">
                                    Code
                                </div>
                                <Field name="code" v-model="userProfile.code" v-if="isEmailCodeSend"/>
                                <span @click="changeEmail" v-if="userProfile.email !== user.email">Change</span>
                            </div>
                            <div class="user-profile__old-password user-profile__input-field">
                                <div class="user-profile__old-password-label">
                                    Old password
                                </div>
                                <Field name="oldPassword" v-model="userProfile.oldPassword" type="password"/>
                                <ErrorMessage name="oldPassword"/>
                            </div>
                            <div class="user-profile__password user-profile__input-field">
                                <div class="user-profile__password-label">
                                    New password
                                </div>
                                <Field name="newPassword" v-model="userProfile.newPassword" type="password"/>
                                <ErrorMessage name="newPassword"/>
                            </div>
                            <div class="user-profile__password-confirm user-profile__input-field">
                                <div class="user-profile__password-confirm-label">
                                    Confirm new password
                                </div>
                                <Field name="passwordConfirm" v-model="userProfile.confirmNewPassword" type="password"/>
                                <ErrorMessage name="passwordConfirm" v-model="userProfile.confirmNewPassword"/>
                                <span @click="changePassword" v-if="userProfile.newPassword" >Change password</span>
                            </div>
                        </Form>
                    </div>
                    <div class="user-profile__logout-wrapper" v-if="currentMenuActive === 'logout' || isMobile">
                        <div class="user-profile__logout-label">
                            Are you sure you want to exit your account?
                        </div>
                        <button class="user-profile__logout primary-button" @click="logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ErrorMessage, Field, Form} from "vee-validate";
import {computed, onMounted, reactive, ref, watch} from "vue";
import ArrowRight from "@/img/svg/arrow-right.svg";
import {useMainStore} from "@/stores/main.js";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";
import LeftMenu from "@/components/LeftMenu.vue";
import api from "@/services/client.js";
import {notify} from "@kyvg/vue3-notification";
const mainStore = useMainStore();
const user = computed(() => mainStore.getUser);
const BaseUrl = ref(import.meta.env.VITE_BASE_API);
const currentCurrency = computed(() => mainStore.currency);
const currentMenuActive = computed(() => mainStore.getCurrentPersonalPage);
const isMobile = computed(() => window.innerWidth < 1024);
const currentValue = computed(() => currentCurrency.value === 'EUR' ? '€': '£');
const router = useRouter();
const isEmailCodeSend = ref(false);
const courses = ref([])
const userProfile = reactive({
    email: user.value.email,
    newPassword: '',
    code: '',
    oldPassword: '',
    confirmNewPassword: '',
    firstName: user.value.first_name,
    lastName: user.value.second_name,
});
watch(user, () => {
    userProfile.email = user.value.email;
    userProfile.firstName = user.value.first_name;
    userProfile.lastName = user.value.second_name;
}, { once: true, deep: true })
const changePassword = async () => {
    if (userProfile.newPassword !== userProfile.confirmNewPassword) {
        notify({
            type: 'error',
            title: "Passwords don't match",
        });
        return
    }
    if (!userProfile.confirmNewPassword) {
        notify({
            type: 'error',
            title: "Fill out password confirmation",
        });
        return
    }
    try {
        const r = await api.post('/change-password', {
            old_password: userProfile.oldPassword,
            new_password: userProfile.newPassword,
        });
        notify({
            type: 'success',
            title: "Password changed",
        });
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
const changeEmail = async (code) => {
    try {
        const r = await api.post('/change-email', {
            new_email: userProfile.email,
        }, {
            params: {
                code,
            }
        });
        isEmailCodeSend.value = true;
        if (!code) {
            notify({
                type: 'success',
                title: "Code Sent",
            });
        } else {
            isEmailCodeSend.value = false;
            notify({
                type: 'success',
                title: "Email changed",
            });
        }
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
const changeName = async () => {
    try {
        const r = await api.post('/users', {
            first_name: userProfile.firstName,
            second_name: userProfile.lastName,
        });
        notify({
            type: 'success',
            title: "Profile Updated",
        });
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
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
    &__left-menu {
        margin-right: 30px;
    }
    padding-top: 40px;
    @include mqm(1024) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    &__first-name-label {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }
    &__content {
        max-width: 860px;
        width: 100%;
        margin: 0 auto;
    }
    &__course-right {
        display: flex;
        align-items: center;
        svg {
            flex: 0 0 auto;
            margin-right: 20px;
        }
    }
    &__course-price {
        color: #606060;
        font-family: 'Inter', sans-serif;
        font-style: italic;
        margin-right: 30px;
        min-width: 50px;
        @include mqm(1024) {
            margin-right: 30px;
        }
    }
    &__courses-empty-button {
        padding: 15px 0;
        max-width: 413px;
        width: 100%;
        text-align: center;
        margin-top: 60px;
    }
    .page-name {
        margin-bottom: 0;
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
            span {
                display: inline-block;
                cursor: pointer;
                margin-top: 10px;
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
        cursor: pointer;
        justify-content: space-between;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        padding: 10px;
        border-radius: 30px;
        &:not(:first-child) {
            margin-top: 30px;
        }
        @include mqm(1024) {
            justify-content: space-between;
            height: 150px;
            padding: 10px 20px 10px 10px;
        }
    }
    &__course-title {
        padding-left: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        font-family: 'Inter', sans-serif;
        padding-right: 40px;
        @include mqm(1024) {
            font-size: 24px;
            font-weight: 700;
        }
    }
    &__course-img {
        height: 70px;
        width: 70px;
        border-radius: 25px;
        flex: 0 0 auto;
        img {
            height: 100%;
            border-radius: 25px;
            width: 100%;
            object-fit: cover;
        }
        @include mqm(1024) {
            height: 130px;
            width: 130px;
        }
    }
}
</style>
