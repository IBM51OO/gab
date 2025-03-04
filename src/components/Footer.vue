<template>
    <div class="footer-wrapper">
        <img src="../img/blf.png" alt="" class="blick">
        <div class="container">
            <div class="footer">
                <div class="footer__logo">
                    <div class="footer__visa-logo">
                        <img src="../img/payments.png" alt="">
                    </div>
                </div>
                <div class="footer__row">
                    <div class="footer__subscribe">
                        <div class="footer__subscribe-title">
                            Subscribe for our monthly news
                        </div>
                        <div class="footer__subscribe-input">
                            <input type="email" placeholder="e-mail">
                        </div>
                        <div class="footer__subscribe-submit primary-button">
                            Submit
                        </div>
                    </div>
                    <div class="footer__nav">
                        <div class="footer__menu">
                            <div class="footer__menu-title">
                                Menu
                            </div>
                            <ul class="footer__menu-list">
                                <li @click="router.push({name: 'home'})">Home</li>
                                <li @click="router.push({name: 'courses'})">Courses</li>
                                <li @click="router.push({name: 'about-us'})">About Us</li>
                                <li @click="router.push({name: 'blog'})">Blog</li>
                                <li @click="router.push({name: 'sign-in'})">Login / My Account</li>
                            </ul>
                        </div>
                        <div class="footer__legal-information">
                            <div class="footer__legal-information-title">
                                Legal Information
                            </div>
                            <ul class="footer__legal-information-list">
                                <li @click="router.push({name: 'privacy'})">Privacy Policy</li>
                                <li @click="router.push({name: 'terms'})">Terms & Condition</li>
                            </ul>
                            <div class="footer__address">
                                <div class="footer__address-title">
                                    Address
                                </div>
                                <ul class="footer__address-value">
                                    593 Holly Lane, Birmingham, UK, B24 9LU
                                </ul>
                            </div>
                        </div>
                        <div class="footer__contacts">
                            <div class="footer__contacts-title">
                                Contacts
                            </div>
                            <ul>
                                <li>
                                    info@fitshpere.pro
                                </li>
                                <li>
                                    +44 7537 133610
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__visa-logo-desk">
                        <img src="../img/payments.png" alt="">
                        <img src="../img/wal.png" alt="" class="last-c">
                        <div class="cope-right">
                            <div>
                                UNI COBRAND LTD
                            </div>
                            © 2025 All rights reserved by Fitsphere
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import LogoSvg from '@/img/svg/logow.svg?component';
import {useRouter} from "vue-router";
const router = useRouter();
</script>
<style lang="scss">
.footer-wrapper {
    position: relative;
    padding-bottom: 50px;
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
    .blick {
        position: absolute;
        height: 280px;
        bottom: 0;
        pointer-events: none;
        z-index: -1;
    }
}
.footer {
    border-radius: 30px;
    border: 3px solid #1A69AD;
    padding: 35px 30px;
    @include mqm(1024) {
        padding: 50px 80px;
    }
    &__logo {
        display: none;
        @include mqm(1024) {
            display: flex;
            justify-content: space-between;
        }
    }
    &__legal-information-list {
        li {
            cursor: pointer;
        }
    }
    .cope-right {
        font-size: 12px;
        margin-top: 25px;
        font-family: 'Roboto-Regular' sans-serif;
        color: rgba(0, 0, 0, 0.5);
        @include mqm(1024) {
            margin-top: 45px;
            text-align: right;
        }
    }
    &__subscribe-title {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #000;
    }
    &__subscribe-input {
        width: 100%;
        border-radius: 10px;
        input {
            outline: none;
            height: 47px;
            border-radius: 10px;
            padding-left: 20px;
            width: 100%;
            margin-top: 10px;
        }
    }
    &__subscribe {
        @include mqm(1024) {
            order: 2;
            flex: 35%;
            max-width: 325px;
        }
    }
    &__address-title {
        margin-top: 15px;
    }
    &__address-value {
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        white-space: nowrap;
        margin-top: 16px;
    }
    &__subscribe-submit {
        max-width: 196px;
        text-align: center;
        width: 100%;
        padding: 15px 0;
        font-size: 20px;
        font-weight: 500;
        border-radius: 20px;
        margin-top: 25px;
        color: #fff;
    }
    &__nav {
        margin-top: 50px;
        @include mqm(1024) {
            margin-top: 0;
            display: flex;
            justify-content: space-between;
            order: 1;
            flex: 50%;
            max-width: 515px;
        }
    }
    &__row {
        @include mqm(1024) {
            display: flex;
            justify-content: space-between;
        }
    }
    &__menu-title {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: #000;
    }
    &__menu-list {
        margin-top: 15px;
    }
    &__menu {
        min-width: 160px;
    }
    &__contacts {
        @include mqm(1024) {
            margin-left: -100px;
        }
    }
    &__legal-information-list {
        @include mqm(1024) {
            margin-top: -30px;
        }
    }
    &__legal-information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    ul {
        list-style-type: none;
        padding-left: 0;
    }
    li {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: #000;
        margin-top: 15px;
        font-weight: 400;
        cursor: pointer;
    }
    &__legal-information {
        margin-top: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        @include mqm(1024) {
            margin-top: 0;
        }
    }
    &__visa-logo {
        @include mqm(1024) {
            display: none;
        }
    }
    &__visa-logo-desk {
        margin-top: 40px;
        img:first-child {
            display: none;
        }
        @include mqm(1024) {
            margin-top: 0;
            img {
                margin-left: auto;
            }
            img:first-child {
                display: block;
            }
            .last-c {
                display: none;
            }
            order: 3;
        }
    }
    &__contacts {
        margin-top: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        @include mqm(1024) {
            margin-top: 0;
        }
    }
}
</style>
<script setup>
</script>
