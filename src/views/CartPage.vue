<template>
    <div class="cart-page" v-if="courses">
        <div class="container">
            <div class="page-name">
                Cart
            </div>
            <div class="cart-page__row">
                <div class="cart-page__info">
                    <div class="cart-page__list">
                        <div class="cart-page__item" v-for="(item, index) in cartItems" :key="item.id">
                            <div class="cart-page__item-info">
                            <span class="cart-page__item-count">
                            {{index + 1}}.
                            </span>
                                <span class="cart-page__item-name">
                                {{ item.name }}
                            </span>
                            </div>
                            <div class="cart-page__item-price">
                                {{ item.prices.find((el) => el.currency === currentValue).amount }} {{ currencySign }}
                            </div>
                        </div>
                    </div>
                    <div class="cart-delimeter cart-delimeter--top"></div>
                    <div class="cart-page__subtotal">
                        <div class="cart-page__subtotal-label">
                            Subtotal:
                        </div>
                        <div class="cart-page__subtotal-value" v-if="cartItems?.length">
                            <div class="cart-page__subtotal-old-price" v-if="cartItems.length > 1">
                                {{ cartSubtotal }} {{ currencySign }}
                            </div>
                            {{ cartSubtotalWithDiscount }} {{ currencySign }}
                        </div>
                    </div>
                    <div class="cart-delimeter cart-delimeter--bottom"></div>
                </div>
                <div class="cart-page__billings">
                    <div class="page-name">
                        Billing details
                    </div>
                    <Form :validation-schema="schemaBillings" @submit="onSubmitOrder" class="cart-page__form">
                        <div class="cart-page__first-name">
                            <div class="cart-page__first-name-label">
                                First name
                            </div>
                            <Field name="firstName"/>
                            <ErrorMessage name="firstName"/>
                        </div>
                        <div class="cart-page__last-name">
                            <div class="cart-page__last-name-label">
                                Last name
                            </div>
                            <Field name="lastName"/>
                            <ErrorMessage name="lastName"/>
                        </div>
                        <div class="cart-page__email">
                            <div class="cart-page__email-label">
                                Email
                            </div>
                            <Field name="email" type="email" :value="user.email" />
                            <ErrorMessage name="email"/>
                        </div>
                        <div class="cart-page__country-and-phone">
                            <div class="cart-page__country-select">
                                <div class="cart-page__country-select-label">
                                    Country
                                </div>
                                <country-select  topCountry="US" v-model="userCountry" />
                            </div>
                            <div class="cart-page__phone">
                                <div class="cart-page__phone-label">
                                    Phone
                                </div>
                                <IntlTelInput
                                    ref="intlTelInput"
                                    :options="{
                                  initialCountry: 'us',
                                  autoPlaceholder: 'aggressive',
                                  separateDialCode: true,
                                  strictMode: true,
                                }"
                                    @changeNumber="onChangeNumber"
                                    @changeErrorCode="(val) => phoneError = val"
                                />
                                <span v-if="phoneError">
                                Error number validation
                            </span>
                            </div>
                        </div>
                        <span v-if="countryError">
                            Error country validation
                        </span>
                        <div class="cart-page__city">
                            <div class="cart-page__city-label">
                                City
                            </div>
                            <Field name="city" type="text" :value="user.city" />
                            <ErrorMessage name="city"/>
                        </div>
                        <div class="cart-page__postal">
                            <div class="cart-page__postal-label">
                                Postal Code
                            </div>
                            <Field name="postal_code" type="text" :value="user.postal" />
                            <ErrorMessage name="postal_code"/>
                        </div>
                        <div class="cart-page__address-1">
                            <div class="cart-page__address-1-label">
                                Line 1 of the address
                            </div>
                            <Field name="address1" type="text" :value="user.address1" />
                            <ErrorMessage name="address1"/>
                        </div>
                        <div class="cart-page__address-2">
                            <div class="cart-page__address-2-label">
                                Line 2 of the address
                            </div>
                            <Field name="address2" type="text" :value="user.address2" />
                            <ErrorMessage name="address2"/>
                        </div>
                        <div class="cart-page__state">
                            <div class="cart-page__state-label">
                                State
                            </div>
                            <Field name="state" type="text" :value="user.state" />
                            <ErrorMessage name="state"/>
                        </div>
                        <div class="cart-page__billings-rule">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <p @click="router.push({name: 'privacy'})">privacy policy</p>.
                        </div>
                        <Field v-slot="{ field }" name="agree" type="checkbox" :value="true" :unchecked-value="false">
                            <label class="cart-page__billings-rule-label">
                                <input type="checkbox" name="agree" v-bind="field" :value="true" />
                                <span>I have read and agree to the website <p @click="router.push({name: 'terms'})">terms and conditions</p></span>
                            </label>
                        </Field>
                        <ErrorMessage name="agree"/>
                        <button class="primary-button cart-button-submit" v-if="cartItems.length">Place order</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {computed, nextTick, onMounted, ref} from "vue";
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
import {ErrorMessage, Field, Form} from "vee-validate";
import { vMaska } from "maska/vue"
import * as yup from "yup";
import api from "@/services/client.js";
import {useMainStore} from "@/stores/main.js";
import {notify} from "@kyvg/vue3-notification";
import {useRouter} from "vue-router";
const router = useRouter();
const schemaBillings = yup.object({
    firstName: yup.string().required('First Name is a required field'),
    lastName: yup.string().required('Last Name is a required field'),
    email: yup.string().email().required('E-mail is a required field'),
    city: yup.string().required('City is a required field'),
    address1: yup.string().required('Address is a required field'),
    address2: yup.string(),
    postal_code: yup.string().required('Postal is a required field'),
    state: yup.string().required('State is a required field'),
});
const phoneNumber = ref();
const intlTelInput = ref();
const userCountry = ref();
const phoneError = ref(false);
const countryError = ref(false);
const courses = ref();
onMounted(async () => {
    await fetchCourses();
    console.log(intlTelInput.value)
});
const mainStore = useMainStore();
const fetchCourses = async () => {
    courses.value = await api.get('/courses');
}
const user = computed(() => mainStore.getUser);
const currencySign = computed(() => mainStore.getCurrency === 'EUR' ? '€' : '£');
const currentValue = computed(() => mainStore.getCurrency);
const cartItems = computed(() => mainStore.getUser?.basket && courses.value.filter((el) => mainStore.getUser.basket.includes(el.id)))
const cartSubtotal = computed(() => cartItems.value?.reduce((acc, curr) => curr.prices.find((el) => currentValue.value === el.currency).amount + acc, 0));
const cartSubtotalWithDiscount = computed(() => {
    if (cartItems.value.length === 2) {
        return cartSubtotal.value - (cartSubtotal.value * 0.3);
    } else {
        if (cartItems.value.length > 2) {
            return cartSubtotal.value - (cartSubtotal.value * 0.5);
        }
    }
    return cartSubtotal.value;
});
function formatPhoneNumber(phone) {
    // Удаляем пробелы и символы, кроме цифр и "+"
    const cleaned = phone.replace(/[^\d+]/g, '');
    // Проверяем, начинается ли номер с "+"
    if (!cleaned.startsWith('+')) {
        return 'Номер должен начинаться с "+"';
    }

    if (!cleaned) {
        return 'Неправильный формат номера';
    }
    const countryCode = cleaned[1];
    const number = cleaned.slice(2, cleaned.length); // Номер без кода страны
    return `${countryCode} ${number}`;
}
function onChangeNumber(data) {
    phoneNumber.value = formatPhoneNumber(data);
}
async function onSubmitOrder(data) {
    if (phoneError.value) {
        return;
    }
    if (!userCountry.value) {
        countryError.value = true;
    }
    if (countryError.value) {
        return;
    }
    try {
        console.log(data.address2)
        const r = await api.post('/order-from-basket', {
            name: data.firstName,
            surname: data.lastName,
            email: data.email,
            phone: phoneNumber.value,
            country: userCountry.value,
            city: data.city,
            postal_code: data.postal_code,
            line_one_address: data.address1,
            line_second_address: data.address2 ? data.address2 : null,
            state: data.state,
            country_code: intlTelInput.value.instance.defaultCountry.toUpperCase(),
        }, {
            params: {
                currency: currentValue.value
            },
        });
        notify({
            type: 'success',
            title: "Order success",
        });
        window.open(r.payment_url, '_self').focus();
        // router.push({name: 'profile'})
    } catch (e) {
        notify({
            type: 'error',
            title: "Server Error. Try Again",
        });
    }
}
</script>
<style lang="scss">
.cart-page {
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 180px;
        }
    }
    &__country-and-phone {
        display: flex;
        gap: 15px;
        align-items: center;
    }
    &__country-select-label, &__phone-label {
        margin-top: 20px;
        margin-bottom: 5px;
    }
    &__country-select {
        select {
            min-height: 40px;
        }
    }
    &__subtotal-label {
        font-family: 'Inter', sans-serif;
    }
    &__subtotal-value {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    &__subtotal-old-price {
        color: #A72424;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        text-decoration: line-through;
    }
    .page-name {
        margin-bottom: 10px;
        @include mqm(1024) {
            margin-bottom: 40px;
            text-align: center;
        }
    }
    &__item-price {
        font-size: 20px;
        font-family: 'Inter', sans-serif;
    }
    &__form {
        button {
            cursor: pointer;
        }
    }
    &__info {
        order: 1;
        @include mqm(1024) {
            order: 2;
            flex: 50%;
            padding-left: 110px;
            padding-top: 44px;
        }
    }
    input {
        width: 100%;
        border: none;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.05);
    }
    &__first-name-label, &__email-label, &__postal-label, &__last-name-label, &__state-label, &__country-label, &__city-label, &__address-1-label, &__address-1-label, &__address-2-label, &__first-name-label {
        margin-bottom: 5px;
        @include mqm(1024) {
            margin-top: 20px;
        }
    }
    &__billings-rule {
        font-size: 14px;
        color: #383838;
        margin-top: 25px;
        p {
            cursor: pointer;
            display: inline;
            font-weight: 500;
            text-decoration: underline;
        }
    }
    &__row {
        padding-bottom: 100px;
        @include mqm(1024) {
            display: flex;
            justify-content: space-between;
            padding-bottom: 60px;
        }
    }
    &__billings {
        order: 2;
        margin-top: 30px;

        @include mqm(1024) {
            margin-top: 0;
            border-right: 1px rgba(0, 0, 0, 0.3) solid;
            padding-right: 110px;
            padding-bottom: 0;
        }
        .page-name {
            @include mqm(1024) {
                text-align: left;
                margin-bottom: 0;
            }
        }
        @include mqm(1024) {
            order: 1;
            flex: 50%;
        }
        span {
            display: block;
            color: darkred;
            margin: 10px 0;
        }

        .cart-button-submit {
            box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
            text-align: center;
            padding: 23px 0;
            border: none;
            font-size: 20px;
            font-weight: 500;
            line-height: 14px;
            margin-top: 40px;
            background-color: #fff;
            border-radius: 20px;
            width: 100%;
            text-align: center;
            color: #fff;
            @include mqm(1024) {
                max-width: 301px;
            }
        }
    }
    &__billings-rule-label {
        display: flex;
        align-items: center;
        margin-top: 10px;
        span {
            font-size: 14px;
            color: #626262;
            margin: 0 0 0 18px;
        }
        p {
            cursor: pointer;
            color: black;
            text-decoration: underline;
        }
        input {
            height: 15px;
            width: 15px;
        }
        p {
            display: inline;
        }
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        &:not(:first-child) {
            margin-top: 24px;
        }
        &:last-child {
            border-bottom: none;
        }
    }
    &__item-count {
        margin-right: 5px;
    }
    &__subtotal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 24px 0 40px 0;
        font-size: 20px;
        font-weight: 500;
        @include mqm(1024) {
            margin: 24px 0 30px 0;
        }
    }
    .cart-delimeter {
        height: 1px;
        background-color: rgba(0, 0, 0, 0.3);
        width: 50%;
        margin: 0 auto;
        &--bottom {
            display: none;
            @include mqm(1024) {
                display: none;
            }
        }
    }
    &__item-info {
        display: flex;
    }
    &__item-name {
        max-width: 180px;
        display: inline-block;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
    }
    &__subtotal-value {
        font-size: 20px;
        font-family: 'Inter', sans-serif;
    }
}
</style>
