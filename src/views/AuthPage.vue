<template>
    <div class="auth-page-wrapper">
        <div class="container">
            <div class="auth-page">
                <div class="sign-in" v-if="!isVerify">
                    <div class="page-name">
                        Login
                    </div>
                    <Form :validation-schema="schemaSignIn" @submit="onSubmitSignIn" v-if="isSignIn">
                        <div class="sign-in__email">
                            <div class="sign-in__email-label">
                                Email
                            </div>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email"/>
                        </div>
                        <div class="sign-in__password">
                            <div class="sign-in__password-label">
                                Password
                            </div>
                            <Field name="password" type="password"/>
                            <ErrorMessage name="password"/>
                        </div>
                        <div class="sign-in__forgot-password-button" @click="isSignIn = false">
                            Forgot password
                        </div>
                        <button>Log in</button>
                    </Form>
                    <Form :validation-schema="schemaForgot" @submit="onSubmitForgot" v-else-if="!forgotPasswordData.email">
                        <div class="sign-in__email">
                            <div class="sign-in__email-label">
                                Email
                            </div>
                            <Field name="emailForgot" type="email"/>
                            <ErrorMessage name="emailForgot"/>
                        </div>
                        <div class="sign-up-verify__new-password">
                            <div class="sign-up____new-password-label">
                                New Password
                            </div>
                            <Field name="newPassword" type="password"/>
                            <ErrorMessage name="newPassword"/>
                        </div>
                        <button>Submit</button>
                    </Form>
                    <Form :validation-schema="schemaSubmitForgot" @submit="onSubmitForgotCode" v-else>
                        <div class="sign-in__code-otp">
                            <div class="sign-in__code-otp-label">
                                Code
                            </div>
                            <Field name="codeForgot"/>
                            <ErrorMessage name="codeForgot"/>
                        </div>
                        <button>Submit</button>
                    </Form>
                </div>
                <hr v-if="!isVerify">
                <div class="sign-up" v-if="!isVerify">
                    <div class="page-name">
                        Register
                    </div>
                    <Form :validation-schema="schemaSignUp" @submit="onSubmitSignUp">
                        <div class="sign-up__email">
                            <div class="sign-up__email-label">
                                Email
                            </div>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email"/>
                        </div>
                        <div class="sign-up__password">
                            <div class="sign-up__password-label">
                                Password
                            </div>
                            <Field name="password" type="password"/>
                            <ErrorMessage name="password"/>
                        </div>
                        <div class="sign-up__repeat-password">
                            <div class="sign-up__password-label">
                                Confirm Password
                            </div>
                            <Field name="passwordConfirmation" type="password"/>
                            <ErrorMessage name="passwordConfirmation"/>
                        </div>
                        <button>Sign up</button>
                    </Form>
                </div>
                <div class="sign-up-verify" v-else>
                    <Form :validation-schema="schemaSignUpVerify" @submit="onSubmitSignUpVerify">
                        <div class="sign-up-verify__code">
                            <div class="sign-up__email-label">
                                Code
                            </div>
                            <Field name="code" type="password"/>
                            <ErrorMessage name="code"/>
                        </div>
                        <button>Verify</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {Field, Form, ErrorMessage, useForm} from 'vee-validate';
import * as yup from 'yup';
import api from "@/services/client.js";
import {computed, reactive, ref} from "vue";
import {notify} from "@kyvg/vue3-notification";
import {useCookies} from "vue3-cookies";
import {useMainStore} from "@/stores/main.js";
import {useRouter} from "vue-router";
const  { cookies } = useCookies();
const schemaSignIn = yup.object({
    email: yup.string().email().required('E-mail is a required field'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const forgotPasswordData = reactive({
    email: null,
    code: null,
    newPassword: null,
})
const mainStore = useMainStore();
const schemaSubmitForgot = yup.object({
    codeForgot: yup.string().required('Code is a required field'),
});
const schemaSignUp = yup.object({
    email: yup.string().email().required('E-mail is a required field'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirmation: yup.string().required('Confirmation is a required field').oneOf([yup.ref('password'), null], 'Passwords must match')
});
const schemaSignUpVerify = yup.object({
    code: yup.string()
        .required('This field is required')
        .min(4, 'Must be at least 4 characters long')
});

const isVerify = ref(false);
const user = reactive({
    email: '',
    password: '',
});
const router = useRouter();
const schemaForgot = yup.object({
    emailForgot: yup.string().email().required('E-mail is a required field'),
});
const isSignIn = ref(true);
async function onSubmitForgotCode(data) {
    try {
        const r = await api.post('/forgot-password', {
            email: forgotPasswordData.email,
            new_password: forgotPasswordData.newPassword,
        }, {
            params: {
                code: data.codeForgot,
            }
        });
        isSignIn.value = true;
        forgotPasswordData.email = null;
        forgotPasswordData.newPassword = null;
        forgotPasswordData.code = null;
        // const rr = await api.get('/me');
        // console.log(rr);
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
async function onSubmitForgot(data) {
    forgotPasswordData.email = data.emailForgot;
    forgotPasswordData.newPassword = data.newPassword;
    console.log(data)
    if (!data.newPassword) return;
    try {
        const r = await api.post('/forgot-password', {
            email: forgotPasswordData.email,
            new_password: forgotPasswordData.newPassword,
        });
        // const rr = await api.get('/me');
        // console.log(rr);
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
async function onSubmitSignIn(data) {
    try {
        const r = await api.post('/login', {
            username: data.email,
            password: data.password,
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        router.push('/profile');
        mainStore.changeIsAuth(true);

        cookies.set('access_token', r.access_token);
        // const rr = await api.get('/me');
        // console.log(rr);
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}

async function onSubmitSignUp(data) {
    user.email = data.email;
    user.password = data.password;
    try {
        await api.post('/registrations', {
            first_name: '',
            second_name: '',
            email: data.email,
            password: data.password,
        })
        isVerify.value = true;
        notify({
            type: 'success',
            title: "Code Sent",
            text: "The authorization code has been sent by email",
        });
    } catch (e) {
        notify({
            title: "Server Error",
        });
    }
}
async function onSubmitSignUpVerify(data) {
    try {
        await api.post('/registrations', {
            first_name: '',
            second_name: '',
            email: user.email,
            password: user.password,
        }, {
            params: {
                code: data.code,
            }
        })
        notify({
            title: "Code verified",
        });
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error",
        });
    }
}
</script>
<style lang="scss">
.page-name {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 30px 0;
    color: #000000;
}
.auth-page-wrapper {
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 180px;
        }
    }
}
.auth-page {
    padding-bottom: 100px;
    @include mqm(1024) {
        display: flex;
    }
    .sign-up-verify {
        width: 100%;
        &__new-password {
            margin-top: 10px;
        }
    }
    hr {
        margin: 50px 95px;
    }
    span {
        color: darkred;
        margin-top: 5px;
        font-size: 14px;
    }

    input {
        width: 100%;
        border: none;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.05);
    }

    button {
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
        background: #fff;
        cursor: pointer;
    }
}

.sign-in {
    @include mqm(1024) {
        width: 100%;
    }
    &__email-label, &__password-label {
        margin-bottom: 5px;
        font-size: 16px;
        color: #000;
    }

    &__password-label {
        margin-top: 25px;
    }
    &__forgot-password-button {
        cursor: pointer;
        font-size: 14px;
        margin-top: 10px;
        color: #393972;
        text-decoration: underline;
    }
}

.sign-up {
    @include mqm(1024) {
        width: 100%;
    }
    &__email-label, &__password-label {
        margin-bottom: 5px;
        font-size: 16px;
        color: #000;
    }

    &__password-label {
        margin-top: 25px;
    }
}
</style>
