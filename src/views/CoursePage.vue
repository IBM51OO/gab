<template>
    <div class="course-item">
        <div class="container">
            <div class="course-item__wrapper">
                <div class="course-item__name">
                    Название курса
                </div>
                <div class="course-item__title">
                    Заголовок заголовок заголовоку
                </div>
                <div class="course-item__content">
                    Текст курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста
                    Текст курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса текста курса
                </div>
                <div class="course-item__buttons">
                    <div class="course-item__prev-button">
                        <PrevIcon />
                    </div>
                    <div class="course-item__next-button">
                        Next
                    </div>
                </div>
                <div class="course-item__pages-length">
                    5/10
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PrevIcon from "@/img/svg/prev.svg?component";
</script>
<style lang="scss" scoped>
.course-item {
    .container {
        @include mqm(1024) {
            max-width: 1024px;
            margin: 0 auto;
        }
    }
    &__name {
        color: #000;
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        @include mqm(1024) {
            font-size: 14px;
            text-align: center;
        }
    }
    &__title {
        font-weight: 700;
        margin-top: 10px;
        text-align: left;
        font-size: 30px;
        @include mqm(1024) {
            font-size: 50px;
            text-align: center;
        }
    }
    &__content {
        font-size: 14px;
        margin-top: 12px;
        @include mqm(1024) {
            font-size: 16px;
            margin-top: 0;
        }
    }
    &__buttons {
        display: flex;
        margin-top: 40px;
        @include mqm(1024) {
            padding: 0 90px;
        }
    }
    &__next-button {
        background-color: #576C7E;
        height: 60px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #fff;
        font-size: 20px;
    }
    &__prev-button {
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin-right: 20px;
        width: 100%;
        max-width: 55px;
        @include mqm(1024) {
            max-width: 90px;
        }
    }
    &__pages-length {
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
    }
}
</style>
