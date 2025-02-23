<template>
    <div class="banner">
        <div class="banner-left">
            <div class="banner__title">
                🔥 The More You Learn, The More You Save!
            </div>
            <div class="banner__text">
                <span>📌 Buy 2 courses – Get 30% OFF!</span>
                <span>📌 Buy 3 courses – Get 50% OFF!</span>
            </div>
            <div class="banner__button">
                Explore Courses
            </div>
        </div>
        <div class="banner-right">
            <div class="banner__img">
                <img src="../img/banner.png" alt="">
            </div>
        </div>
        <div class="close-button" @click="closeBanner">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.35355" y1="0.646447" x2="20.3536" y2="19.6464" stroke="black"/>
                <line x1="0.646447" y1="19.6464" x2="19.6464" y2="0.646447" stroke="black"/>
            </svg>
        </div>
    </div>
</template>
<style lang="scss">
    .modal-container {
        z-index: 999;
        background-color: #0000009e !important;
    }
    .banner {
        position: relative;
        border-radius: 30px;
        background: rgb(217,230,244);
        background: linear-gradient(225deg, rgba(217,230,244,1) 0%, rgba(217,230,244,1) 22%, rgba(217,230,244,1) 54%, rgba(217,230,244,1) 100%);
        max-width: 1060px;
        display: flex;
        flex-direction: column;
        @include mqm(1024) {
            flex-direction: row;
            font-size: 40px;
        }
        .close-button {
            position: absolute;
            right: 25px;
            top: 25px;
            height: 19px;
            cursor: pointer;
            width: 19px;
        }
        &__title {
            padding: 55px 25px 0 25px;
            font-size: 24px;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            line-height: 130%;
            @include mqm(1024) {
                padding: 80px 0 0 50px;
                font-size: 40px;
            }
        }
        &__text {
            padding: 25px 25px 0 25px;
            font-size: 20px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            line-height: 22px;
            span {
                display: block;
            }
            @include mqm(1024) {
                padding: 50px 0 0 50px;
                font-size: 24px;
                line-height: 30px;
            }
        }
        &__button {
            position: absolute !important;
            text-align: center;
            border-radius: 20px;
            cursor: pointer;
            color: #1969AD;
            border: 1px solid #1969AD;
            padding: 17px 0;
            font-size: 20px;
            font-family: 'Inter', sans-serif;
            width: 100%;
            background-color: #fff;
            font-weight: 500;
            margin-bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0);
            max-width: 95%;
            bottom: 0;
            @include mqm(1024) {
                left: 0;
                transform: unset;
                position: relative !important;
                max-width: 278px;
                margin: 50px 0 80px 50px;
            }
        }
        &__img {
            height: 100%;
            padding-top: 30px;
            @include mqm(1024) {
                padding-top: 0;
            }
        }
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: 90% 50%;
        }
    }
</style>
<script setup>
import {closeModal} from "jenesius-vue-modal";
function closeBanner() {
    document.body.style.height = '100%';
    document.body.style.overflow = 'unset';
    closeModal();
};
</script>
