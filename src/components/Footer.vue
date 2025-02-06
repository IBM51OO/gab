<template>
    <div class="footer">
        <div class="container">
            <div class="footer__logo">
                <div class="footer__logo-icon">
                    <img src="../img/svg/logow.svg" alt="">
                </div>
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
                    <div class="footer__subscribe-submit">
                        Submit
                    </div>
                </div>
                <div class="footer__nav">
                    <div class="footer__menu">
                        <div class="footer__menu-title">
                            Menu
                        </div>
                        <ul class="footer__menu-list">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Login / My Account</li>
                        </ul>
                    </div>
                    <div class="footer__legal-information">
                        <div class="footer__legal-information-title">
                            Legal Information
                        </div>
                        <ul class="footer__legal-information-list">
                            <li>Privacy Policy</li>
                            <li>CourTerms & Conditionses</li>
                        </ul>
                    </div>
                    <div class="footer__contacts">
                        <div class="footer__contacts-title">
                            Contacts
                        </div>
                        <ul>
                            <li>
                                mail@mail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__visa-logo-desk">
                    <img src="../img/payments.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.footer {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #576C7E;
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
    &__logo {
        display: flex;
        justify-content: space-between;
    }
    &__subscribe-title {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
    &__subscribe-input {
        width: 100%;
        input {
            outline: none;
            height: 47px;
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
    &__subscribe-submit {
        max-width: 164px;
        background-color: #fff;
        text-align: center;
        width: 100%;
        padding: 15px 0;
        font-size: 20px;
        font-weight: 500;
        border-radius: 10px;
        margin-top: 20px;
        color: #576C7E;
    }
    &__nav {
        margin-top: 40px;
        @include mqm(1024) {
            display: flex;
            justify-content: space-between;
            order: 1;
            flex: 50%;
            max-width: 550px;
            margin-top: 50px;
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
        font-weight: 700;
        color: #fff;
    }
    &__menu-list {
        margin-top: 15px;
    }
    ul {
        list-style-type: none;
        padding-left: 0;
    }
    li {
        font-size: 14px;
        color: #fff;
        margin-top: 15px;
        font-weight: 400;
    }
    &__legal-information {
        margin-top: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
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
        display: none;
        @include mqm(1024) {
            display: block;
            order: 3;
            margin-top: 20px;
        }
    }
    &__contacts {
        margin-top: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        @include mqm(1024) {
            margin-top: 0;
        }
    }
}
</style>
<script setup>
</script>
