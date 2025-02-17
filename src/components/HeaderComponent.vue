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
                        <router-link to="/sign-in" v-if="!mainStore.getIsAuth" class="sign-in-button primary-button">
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
import {onMounted, reactive} from "vue";
import {useMainStore} from "@/stores/main.js";
import {useRouter} from "vue-router";
const router = useRouter();
const mainStore = useMainStore();
const setActiveCurrency = (currency) => {
    mainStore.changeCurrency(currency);
}
onMounted(() => {
    if (mainStore.getCurrency === 'EUR') {
        document.querySelector('.wallet-eur').classList.add('active');
        document.querySelector('.wallet-fr').classList.remove('active');
    } else {
        document.querySelector('.wallet-fr').classList.add('active');
        document.querySelector('.wallet-eur').classList.remove('active');
    }
    document.querySelectorAll('.header-wallet-mob').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.innerHTML === '£') {
                setActiveCurrency('GBP');
                document.querySelector('.wallet-fr').classList.add('active');
                document.querySelector('.wallet-eur').classList.remove('active');
            } else {
                setActiveCurrency('EUR');
                document.querySelector('.wallet-eur').classList.add('active');
                document.querySelector('.wallet-fr').classList.remove('active');
            }
        })
    })
})
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
    },
    {
        name: 'wallets',
        label: '<p class="wallet-eur header-wallet-mob">€</p> / <p class="wallet-fr header-wallet-mob">£</p>',
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
        z-index: 999;
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
                font-weight: 700 !important;
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
            .header__wallet {
                font-weight: 400;
            }
            li {
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-weight: 500;
                padding-right: 30px;
                &:not(:first-child) {
                    cursor: pointer;
                }
                a {
                    display: block;
                    text-decoration: none;
                    color: #000000;
                    &.router-link-active {
                        border-bottom: 2px solid #1A69AD;
                    }
                }
            }
            .sign-in-button {
                font-size: 14px;
                padding: 15px 30px;
                color: #fff;
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
        &__img-bg {
            position: absolute;
            background-image: url("../img/ec.jpg");
            background-repeat: no-repeat;
        }
        &__img {
            height: 220px;
            width: 100%;
            margin-top: 20px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            @include mqm(1024) {
                flex: 51%;
                img {
                    display: none;
                }
                display: none;
            }
        }
        @include mqm(1024) {
            //background-image: url("../img/transform@1024.png");
            //background-size: cover;
            //min-height: 449px;
            //background-position: 50%;
        }
    }
    .transform-content {
        margin-top: 10px;
        @include mqm(1024) {
            padding-bottom: 100px;
        }
        img {
            width: 100%;
            height: 100%;
        }
        &__title-second {
            background: #1969AD;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 30%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            @include mqm(1024) {
                display: block;
            }
        }
        &__title-first {
            display: block;
            position: relative;
            background: #1969AD;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            @include mqm(1024) {
                display: inline-block;
            }
        }
        &__title {
            font-size: 40px;
            font-weight: 700;
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            line-height: 40px;
            position: relative;
            @include mqm(1024) {
                font-size: 64px;
                line-height: 64px;
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
            font-family: 'Inter', sans-serif;
            max-width: 619px;
            @include mqm(1024) {
                font-size: 16px;
            }
        }
        &__explore-button {
            position: relative;
            color: #1969AD;
            border: 1px solid #1969AD;
            font-size: 20px;
            border-radius: 20px;
            font-family: 'Inter', sans-serif;
            max-width: 278px;
            font-weight: 500;
            padding: 22px 0;
            line-height: 16px;
            cursor: pointer;
            text-align: center;
        }
        &__explore-button::before {
            position: absolute;
            content: "";
            inset: 0; /* same as { tp: 0; right: 0; bottom: 0; left: 0; } */
            background: rgb(26,105,173);
            background: linear-gradient(90deg, rgba(26,105,173,1) 0%, rgba(11,43,71,1) 100%);
            z-index: -1;
            opacity: 0;
            border-radius: 20px;
            transition: opacity 0.25s linear;
        }
        &__explore-button:hover {
            color: #fff;
        }
        &__explore-button:hover::before {
            opacity: 1;
        }
        @include mqm(1024) {
            padding: 50px 80px 50px 0;
            display: block;
        }
    }
    .fitness-backed {
        background: rgb(11,70,119);
        background: linear-gradient(225deg, rgba(11,70,119,1) 0%, rgba(76,142,200,1) 100%);
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        padding: 30px 20px 100px 20px;
        @include mqm(1024) {
            display: flex;
            padding: 100px 80px;
            flex-direction: row;
            justify-content: space-between;
        }
        &__content {
            @include mqm(1024) {
                max-width: 580px;
                margin-left: 128px;
                text-align: right;
            }
        }
        &__description {
            margin-top: 30px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            font-family: 'Inter', sans-serif;
            @include mqm(1024) {
                max-width: 507px;
                margin-left: auto;
                margin-top: 50px;
                font-size: 18px;
            }
        }
        &__learn-more-button {
            margin-top: 40px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            color: #1969AD;
            border-radius: 20px;
            background-color: #fff;
            padding: 23px 0;
            font-size: 15px;
            line-height: 14px;
            margin-left: auto;
            width: 100%;
            margin: 40px auto 0 auto;
            max-width: 272px;
            @include mqm(1024) {
                margin: 40px 0 auto auto;
                font-size: 20px;
                max-width: 410px;
            }
        }
        &__img {
            width: 100%;
            height: 353px;
            margin-top: 30px;
            @include mqm(1024) {
                width: auto;
                height: 522px;
                margin-top: 0;
            }
            img {
                border-radius: 30px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__title-desk {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            font-weight: 700;
            display: none;
            color: #fff;
            @include mqm(1024) {
                display: inline;
                text-align: right;
                font-size: 64px;
                line-height: 64px;
                font-weight: 700;
                span {
                    display: block;
                }
            }
        }
        &__title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            font-weight: 700;
            font-size: 40px;
            color: #fff;
            font-weight: 700;
            line-height: 40px;
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
        overflow: hidden;
        padding-top: 100px;
        padding-bottom: 100px;
        font-family: 'AtkinsonHyperlegible',sans-serif;
        font-style: italic;
        &__title {
            font-size: 40px;
            line-height: 40px;
            text-align: left;
            background: #1969AD;
            letter-spacing: 3px;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            color: #576C7E;
            span {
                color: #000;
            }
            @include mqm(1024) {
                font-size: 50px;
                line-height: 52px;
                max-width: 846px;
                span {
                    display: block;
                }
            }
        }
        .expert-skills {
            font-family: 'Inter', sans-serif;
            padding-left: 25px;
            color: #fff;
            font-size: 14px;
            margin-top: 10px;
            @include mqm(1024) {
                font-size: 16px;
                margin-top: 20px;
            }
            &__item {
                &::marker {
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .experts-list {
            @include mqm(1024) {
                display: flex;
                gap: 20px;
                justify-content: space-between;
            }
        }
        .expert {
            border: 2px solid #4887BD;
            border-radius: 30px;
            overflow: hidden;
            width: 100%;
            cursor: pointer;
            transition: 500ms all ease;
            &:not(:first-child) {
                margin-top: 50px;
            }
            img {
                transition: 500ms all ease;
            }
            &:hover .expert-image img {
                transition: 500ms all ease;
                transform: scale(1.1);
            }
            &:hover .expert-description {
                transition: 500ms all ease;
                background-color: #1969AD;
            }
            @include mqm(1024) {
                &:not(:first-child) {
                    margin-top: 0;
                }
            }
        }
        .expert-description {
            transition: 500ms all ease;
            padding: 20px 40px;
            background-color: #4887BD;
            height: 100%;
            &__name {
                color: #fff;
                font-size: 20px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
            }
        }
        .expert-image {
            height: 364px;
            overflow: hidden;
            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
    }
    .inspiring-stories {
        overflow: hidden;
        background: rgb(11, 70, 119);
        background: linear-gradient(225deg, rgb(11, 70, 119) 0%, rgb(76, 142, 200) 100%);
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        padding-bottom: 50px;
        &__title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            padding: 80px 0 50px 0;
            font-size: 32px;
            font-weight: 700;
            line-height: 31px;
            color: #fff;
            @include mqm(1024) {
                text-align: center;
                margin: 0 auto;
                font-size: 48px;
                letter-spacing: -1px;
            }
        }
        &__slider-item-img {
            height: 255px;
            overflow: hidden;
            border-radius: 30px;
        }
        &__slider-item {
            overflow: hidden;
            cursor: pointer;
            &:hover img {
                transform: scale(1.1);
            }
            img {
                transition: 500ms all ease-in;
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 30px;
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
            font-family: 'Inter', sans-serif;
            font-size: 20px;
            color: #fff;
            font-weight: 500;
            line-height: 16px;
            margin-top: 30px;
        }
        .person-description {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            margin-top: 15px;
            color: #fff;
            font-weight: 400;
        }
    }
    .get-start {
        padding-top: 50px;
        position: relative;
        padding-bottom: 100px;
        &__title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            font-size: 40px;
            background: #1969AD;
            letter-spacing: 1px;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 40px;
            span {
                color: #576C7E;
            }
            @include mqm(1024) {
                font-size: 50px;
                line-height: 51px;
            }
        }
        &__blick {
            display: none;
            position: absolute;
            height: 240px;
            width: 240px;
            border-radius: 50%;
            object-fit: cover;
            right: 0;
            top: -50%;
            @include mqm(1024) {
                display: block;
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
                padding-right: 90px;
                max-width: 539px;
            }
        }
        &__buttons {
            display: flex;
            justify-content: space-between;
            height: 60px;
            gap: 20px;
            align-items: center;
            margin-top: 20px;
            @include mqm(1024) {
                margin-top: 80px;
            }
            .get-start-button {
                font-size: 20px;
                cursor: pointer;
                padding: 21px 0;
                line-height: 19px;
                font-weight: 500;
                text-align: center;
                width: 100%;
                @include mqm(1024) {
                    font-size: 20px;
                }
            }
        }
        &__explore-button {
            box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.35);
            color: #576C7E;
            font-weight: 500;

        }
        &__preview {
            height: 413px;
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
            font-family: 'Inter', sans-serif;
            font-size: 20px;
            line-height: 21px;
            margin-top: 20px;
        }
    }
    .primary-button {
        cursor: pointer;
        position: relative;
        z-index: 3;
        background: rgb(26,105,173);
        border-radius: 20px;
        color: #fff;
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background: linear-gradient(90deg, rgba(26,105,173,1) 0%, rgba(11,43,71,1) 100%);
    }
    .primary-button-hover {
        cursor: pointer;
        position: relative;
        z-index: 3;
        border: 1px solid #1969AD;
        color: #1969AD;
        position: relative;
        border-radius: 20px;
        &::before {
            position: absolute;
            content: "";
            inset: 0; /* same as { tp: 0; right: 0; bottom: 0; left: 0; } */
            background: rgb(26,105,173);
            background: linear-gradient(90deg, rgba(26,105,173,1) 0%, rgba(11,43,71,1) 100%);
            z-index: -1;
            opacity: 0;
            border-radius: 20px;
            transition: opacity 0.25s linear;
        }
        &:hover {
            color: #fff;
            background-color: transparent;
        }
        &:hover {
            color: #fff;
            background-color: transparent;
        }
        &:hover::before {
            opacity: 1;
        }
    }
</style>
