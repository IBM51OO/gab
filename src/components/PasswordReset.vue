<template>
    <div class="password-reset">
        <div class="password-reset__title">
            Password reset
        </div>
        <Form v-if="!isCodeStep" :validation-schema="schemaForgot" @submit="onSubmitForgot">
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
            <button class="primary-button sign-up-verify__new-password-button">Submit</button>
        </Form>
        <Form v-else :validation-schema="schemaSubmitForgot" @submit="onSubmitForgotCode">
            <div class="sign-in__code-otp">
                <div class="sign-in__code-otp-label">
                    Code
                </div>
                <Field name="codeForgot"/>
                <ErrorMessage name="codeForgot"/>
            </div>
            <button class="primary-button sign-in__code-otp-button">Submit</button>
        </Form>
    </div>
</template>
<script setup>
import {closeModal, Modal} from "jenesius-vue-modal";
import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from "yup";
import api from "@/services/client.js";
import {notify} from "@kyvg/vue3-notification";
import {reactive, ref} from "vue";
const emit = defineEmits(['delete']);
const schemaForgot = yup.object({
    emailForgot: yup.string().email().required('E-mail is a required field'),
    newPassword: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
const isCodeStep = ref(false);
const schemaSubmitForgot = yup.object({
    codeForgot: yup.string().required('Code is a required field'),
});
const forgotPasswordData = reactive({
    email: null,
    code: null,
    newPassword: null,
})
function handleDelete() {
    emit('delete', Math.random());
}
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
        closeModal();
        forgotPasswordData.email = null;
        forgotPasswordData.newPassword = null;
        forgotPasswordData.code = null;
        notify({
            type: 'success',
            title: "Password reset",
        });
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
    isCodeStep.value = true;
    if (!data.newPassword) return;
    try {
        const r = await api.post('/forgot-password', {
            email: forgotPasswordData.email,
            new_password: forgotPasswordData.newPassword,
        });
        notify({
            type: 'success',
            title: "Code Sent",
        });
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
</script>
<style lang="scss">
.modal-item {
    margin: 0 10px;
    @include mqm(1024) {
        margin: unset;
    }
}
.password-reset {
    background: #fff;
    width: 100%;
    max-width: 630px;
    border-radius: 30px;
    padding: 20px 32px;
    @include mqm(1024) {
        padding: 40px 100px;
    }
    span {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        margin-top: 11px;
        display: block;
        opacity: 0.3;
    }
    &__title {
        background: #1969AD;
        font-style: italic;
        font-family: 'AtkinsonHyperlegible',serif;
        font-weight: 700;
        background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
        -webkit-background-clip: text;з
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 20px;
    }
    input {
        display: block;
        width: 100%;
        border-radius: 5px;
        height: 40px;
        border: none;
        background-color: rgba(0, 0, 0, 0.05);
    }
    .sign-up-verify__new-password {
        margin-top: 30px;
    }
    .sign-in__code-otp-button {
        width: 100%;
        margin: 0 auto;
        display: block;
        max-width: 305px;
        padding: 13px 0;
        margin-top: 50px;
    }
    .sign-in__code-otp-label {
        margin-bottom: 5px;
    }
    .sign-up-verify__new-password-button {
        width: 100%;
        margin: 0 auto;
        display: block;
        max-width: 305px;
        padding: 13px 0;
        margin-top: 50px;
    }
}
</style>
