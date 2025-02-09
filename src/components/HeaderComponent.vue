<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="header-logo" @click="router.push({name: 'home'})">
                    <logo-svg class="header-logo-icon" />
                </div>
                <ul class="header-nav">
                    <li>
                        <div class="header__wallets">
                            <span class="header__wallets-euro header__wallet" :class="{'active': mainStore.getCurrency === 'EUR'}" @click="setActiveCurrency('EUR')">€</span> / <span :class="{'active': mainStore.getCurrency === 'GBP'}" class="header__wallet header__wallets-fu" @click="setActiveCurrency('GBP')">£</span>
                        </div>
                    </li>
                    <li>
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/courses">
                            Courses
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about-us">
                            About Us
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/blog">
                            Blog
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/cart">
                            Cart
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/sign-in" v-if="!mainStore.getIsAuth">
                            Login / My Account
                        </router-link>
                        <router-link to="/profile" v-else>
                            My Account
                        </router-link>
                    </li>
                </ul>
                <burger-menu :items="burderItems" class="burger-menu" />
            </div>
        </div>
    </header>
</template>
<script setup>
import LogoSvg from '@/img/logo.svg?component';
import BurgerMenu from "@/components/BurgerMenu.vue";
import {reactive} from "vue";
import {useMainStore} from "@/stores/main.js";
import {useRouter} from "vue-router";
const router = useRouter();
const mainStore = useMainStore();
const setActiveCurrency = (currency) => {
    mainStore.changeCurrency(currency);
}
const burderItems = reactive([
    {
        name: 'home',
        label: 'Home',
    },
    {
        name: 'courses',
        label: 'Courses',
    },
    {
        name: 'about-us',
        label: 'About Us',
    },
    {
        name: 'blog',
        label: 'Blog',
    },
    {
        name: 'cart',
        label: 'Cart',
    },
    {
        name: 'sign-in',
        label: 'Login / My Account',
    }
])

</script>
<style lang="scss">
    .header {
        position: sticky;
        top: 0;
        background-color: #fff;
        width: 100%;
        display: flex;
        padding: 20px 20px;
        z-index: 3;
        @include mqm(1024) {
            padding: 12px 80px;
        }
        .header-logo {
            cursor: pointer;
        }
        .burger-menu {
            @include mqm(1024) {
                display: none;
            }
        }
        &__wallets {
            font-size: 16px;
            span {
                cursor: pointer;
            }
        }
        &__wallet {
            &.active {
                font-size: 24px;
                font-weight: 700;
            }
        }
        .container {
            width: 100%;
        }
        .header-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-nav {
            display: none;
            align-items: center;
            list-style-type: none;
            li {
                padding-right: 30px;
                &:not(:first-child) {
                    cursor: pointer;
                }
                a {
                    text-decoration: none;
                    color: #000000;
                    &.router-link-active {
                        font-weight: 700;
                    }
                }
            }
            @include mqm(1024) {
                display: flex;
            }
        }
    }
    .transform-banner {
        background-image: none;
        background-repeat: no-repeat;
        .container {
            flex: 49%;
        }
        @include mqm(1024) {
            display: flex;
        }
        &__img {
            height: 220px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
            }
            @include mqm(1024) {
                flex: 51%;
                img {
                    display: none;
                }
            }
        }
        @include mqm(1024) {
            background-image: url("../img/transform@1024.png");
            background-size: cover;
            min-height: 449px;
        }
    }
    .transform-content {
        margin-top: 10px;
        padding-bottom: 100px;
        img {
            width: 100%;
            height: 100%;
        }
        &__title-second {
            @include mqm(1024) {
                display: block;
            }
        }
        &__title-first {
            color: #000000;
            display: block;
            position: relative;
            @include mqm(1024) {
                display: inline-block;
                &::before {
                    content: '';
                    display: block;
                    background-image: url("../img/bridge.png");
                    height: 18px;
                    background-repeat: no-repeat;
                    position: absolute;
                    width: 40px;
                    left: -50px;
                    top: 50%;
                    transform: translate(0, -50%);
                }
            }
        }
        &__title {
            font-size: 32px;
            font-weight: 700;
            color: #576C7E;
            line-height: 34px;
            position: relative;
            @include mqm(1024) {
                font-size: 50px;
                line-height: 51px;
                text-align: right;
            }
        }
        &__slogan {
            font-size: 18px;
            color: #000;
            font-family: 'Roboto-Italic';
            margin-top: 20px;
            @include mqm(1024) {
                font-size: 20px;
            }
        }
        &__description {
            margin-top: 25px;
            font-size: 14px;
            color: #000;
            margin-bottom: 25px;
        }
        &__explore-button {
            background-color: #576C7E;
            color: #fff;
            border-radius: 10px;
            max-width: 246px;
            padding: 22px 0;
            line-height: 16px;
            cursor: pointer;
            text-align: center;
            @include mqm(1024) {
                margin-left: auto;
            }
        }
        @include mqm(1024) {
            padding: 50px 80px 50px 0;
            display: block;
            text-align: right;
        }
    }
    .fitness-backed {
        background-color: #576C7E;
        padding: 30px 20px 100px 20px;
        @include mqm(1024) {
            display: flex;
            padding: 100px 0;
            flex-direction: row;
            justify-content: center;
        }
        &__content {
            @include mqm(1024) {
                max-width: 522px;
                margin-left: 128px;
                text-align: right;
            }
        }
        &__description {
            color: #fff;
            margin-top: 15px;
            font-size: 14px;
            font-weight: 400;
            @include mqm(1024) {
                margin-top: 50px;
            }
        }
        &__learn-more-button {
            margin-top: 40px;
            cursor: pointer;
            text-align: center;
            color: #576C7E;
            border-radius: 10px;
            background-color: #fff;
            padding: 23px 0;
            font-size: 20px;
            line-height: 14px;
            margin-left: auto;
            width: 100%;
            @include mqm(1024) {
                max-width: 369px;
            }
        }
        &__img {
            width: 100%;
            height: 353px;
            margin-top: 30px;
            @include mqm(1024) {
                width: auto;
                margin-top: 0;
            }
            img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__title-desk {
            display: none;
            color: #fff;
            @include mqm(1024) {
                display: block;
                text-align: right;
                font-size: 50px;
                line-height: 52px;
                font-weight: 700;
                span {
                    display: block;
                }
            }
        }
        &__slogan {
            color: #fff;
            font-family: 'Roboto-Italic';
            margin-top: 30px;
            font-weight: normal;
            font-size: 19px;
            @include mqm(1024) {
                font-size: 20px;
            }
        }
        &__title {
            font-size: 32px;
            color: #fff;
            font-weight: 700;
            line-height: 32px;
            text-align: left;
            span {
                display: block;
            }
            @include mqm(1024) {
                display: none;
            }
        }
    }
    .experts-list {
        margin-top: 40px;
    }
    .experts-block {
        padding-top: 100px;
        padding-bottom: 100px;
        &__title {
            font-size: 32px;
            line-height: 32px;
            text-align: left;
            font-weight: 700;
            color: #576C7E;
            span {
                color: #000;
            }
            @include mqm(1024) {
                font-size: 50px;
                line-height: 52px;
                max-width: 846px;
                margin: 0 auto;
                span {
                    display: block;
                }
            }
        }
        .expert-skills {
            padding-left: 25px;
            margin-top: 20px;
            &__item {
                margin-top: 20px;
                &::marker {
                    font-size: 14px;
                    color: #000;
                }
            }
        }
        .experts-list {
            @include mqm(1024) {
                display: flex;
                gap: 20px;
                justify-content: space-between;
                align-items: flex-start;
            }
        }
        .expert {
            &:not(:first-child) {
                margin-top: 50px;
            }
            @include mqm(1024) {
                &:not(:first-child) {
                    margin-top: 0;
                }
            }
        }
        .expert-description {
            margin-top: 20px;
            &__name {
                color: #000;
                font-weight: 500;
                font-size: 20px;
            }
        }
        .expert-image {
            height: 364px;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
    .inspiring-stories {
        background-color: #576C7E;
        padding-bottom: 50px;
        &__title {
            padding: 50px 0;
            font-size: 32px;
            font-weight: 700;
            line-height: 31px;
            color: #fff;
            @include mqm(1024) {
                max-width: 846px;
                text-align: center;
                margin: 0 auto;
                font-size: 50px;
                letter-spacing: -1px;
            }
        }
        &__slider-item-img {
            height: 255px;
        }
        &__slider-item {
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .swiper {
            .swiper-pagination {
                top: unset;
                bottom: 0;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50px;
                .swiper-pagination-progressbar-fill {
                    background: #fff;
                    border-radius: 50px;
                }
            }
        }
        .swiper-wrapper {
            padding-bottom: 50px;
        }
        .person-name {
            font-size: 20px;
            color: #fff;
            font-weight: 500;
            line-height: 16px;
            margin-top: 30px;
        }
        .person-description {
            font-size: 16px;
            margin-top: 15px;
            color: #fff;
            font-weight: 400;
        }
    }
    .get-start {
        padding-top: 50px;
        padding-bottom: 100px;
        &__title {
            font-size: 32px;
            font-weight: 700;
            line-height: 34px;
            color: #000;
            span {
                color: #576C7E;
            }
            @include mqm(1024) {
                font-size: 50px;
                line-height: 51px;
            }
        }
        &__content {
            @include mqm(1024) {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        &__content-right-img {
            display: none;
            @include mqm(1024) {
                display: block;
            }
        }
        &__content-left {
            @include mqm(1024) {
                padding-right: 60px;
                max-width: 481px;
            }
        }
        &__buttons {
            display: flex;
            justify-content: space-between;
            height: 60px;
            gap: 20px;
            align-items: center;
            margin-top: 50px;
            @include mqm(1024) {
                margin-top: 80px;
            }
            .get-start-button {
                font-size: 16px;
                cursor: pointer;
                padding: 23px 0;
                line-height: 19px;
                font-weight: 500;
                text-align: center;
                border-radius: 10px;
                width: 100%;
                @include mqm(1024) {
                    font-size: 20px;
                }
            }
        }
        &__sign-in-button {
            background-color: #576C7E;
            color: #fff;
        }
        &__explore-button {
            box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.35);
            color: #576C7E;
            font-weight: 500;

        }
        &__preview {
            height: 353px;
            margin-top: 50px;
            @include mqm(1024) {
                display: none;
            }
            img {
                height: 100%;
                border-radius: 10px;
                width: 100%;
                object-fit: cover;
            }
        }
        &__description {
            font-family: 'Roboto-Italic';
            font-size: 18px;
            line-height: 17px;
            margin-top: 20px;
        }
    }
</style>
