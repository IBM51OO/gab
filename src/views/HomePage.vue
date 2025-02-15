<template>
    <div class="main-page">
        <div class="transform-block">
            <div class="transform-banner">
                <div class="container">
                    <div class="transform-content">
                        <div class="transform-content__title">
                            <span class="transform-content__title-first">Transform Your</span><span
                            class="transform-content__title-second">Fitness Journey</span>
                        </div>
                        <div class="transform-content__description">
                            At FitSphere, we believe fitness is more than just working out—it's about finding the perfect balance for your body and mind. Our programs are built on a foundation of scientific research, ensuring you achieve your goals effectively and safely. Whether you're a beginner or looking to take your training to the next level, FitSphere has a program tailored just for you.
                        </div>
                        <div class="transform-content__explore-button" @click="router.push({name: 'courses'})">
                            Explore Courses
                        </div>
                    </div>
                </div>
                <div class="transform-banner__img">
                    <img src="../img/transform@1024.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="fitness-backed">
            <div class="fitness-backed__title">
                Your Fitness <span>Backed By Science</span>
            </div>
            <div class="fitness-backed__img">
                <img src="../img/backed.jpg" alt="">
            </div>
            <div class="fitness-backed__content">
                <div class="fitness-backed__title-desk">
                    <span>Your Fitness</span> <span>Backed By Science</span>
                </div>
                <div class="fitness-backed__description">
                    At FitSphere, we go beyond traditional workouts. Our certified trainers craft programs based on the
                    latest research in sports science, ensuring that every exercise is efficient and results-driven.
                    Whether it's strength training, cardio, or yoga, our courses provide you with everything you need to
                    succeed.
                </div>
                <div class="fitness-backed__learn-more-button" @click="router.push({name: 'about-us'})">
                    Learn More About Our Approach
                </div>
            </div>
        </div>
        <div class="experts-block">
            <div class="container">
                <div class="experts-block__title">
                    <span>Meet the Experts Who'll</span>
                    Guide Your Fitness Journey
                </div>
                <div class="experts-list">
                    <div class="expert">
                        <div class="expert-image">
                            <img src="../img/expert.png" alt="">
                        </div>
                        <div class="expert-description">
                            <div class="expert-description__name">
                                Max Carter
                            </div>
                            <ul class="expert-skills">
                                <li class="expert-skills__item">
                                    Certified Strength and Conditioning Specialist (CSCS)
                                </li>
                                <li class="expert-skills__item">
                                    8+ years of experience in functional training and injury prevention
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="expert">
                        <div class="expert-image">
                            <img src="../img/expert2.png" alt="">
                        </div>
                        <div class="expert-description">
                            <div class="expert-description__name">
                                James Rodriguez
                            </div>
                            <ul class="expert-skills">
                                <li class="expert-skills__item">
                                    Certified Personal Trainer (CPT) by NASM
                                </li>
                                <li class="expert-skills__item">
                                    Specializes in weight loss and high-intensity interval training (HIIT)
                                </li>
                                <li class="expert-skills__item">
                                    Helped over 500 clients achieve their fitness goals
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="expert">
                        <div class="expert-image">
                            <img src="../img/expert3.png" alt="">
                        </div>
                        <div class="expert-description">
                            <div class="expert-description__name">
                                Eugenia Williams
                            </div>
                            <ul class="expert-skills">
                                <li class="expert-skills__item">
                                    Registered Yoga Teacher (RYT-500)
                                </li>
                                <li class="expert-skills__item">
                                    Expert in mobility, flexibility, and mindfulness practices
                                </li>
                                <li class="expert-skills__item">
                                    Conducted over 2,000 yoga sessions worldwide
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="inspiring-stories">
            <div class="container">
                <div class="inspiring-stories__title">
                    Inspiring Stories from Our Community
                </div>
                <div class="inspiring-stories__list">
                    <div class="inspiring-stories__list-slider">
                        <swiper
                            :breakpoints="swiperOptions.breakpoints"
                            :pagination="{
                          type: 'progressbar',
                        }"
                            :navigation="true"
                            :modules="[Pagination]"
                            class="mySwiper"
                        >
                            <swiper-slide>
                                <div class="inspiring-stories__slider-item">
                                    <div class="inspiring-stories__slider-item-img">
                                        <img src="../img/inspire/insp1.png" alt="">
                                    </div>
                                    <div class="person">
                                        <div class="person-name">
                                            Anna B., 32
                                        </div>
                                        <div class="person-description">
                                            I’ve never been consistent with fitness until I found FitSphere. The courses are easy to follow, and the trainers are so encouraging. I lost 7 kg in three months and feel stronger than ever!
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="inspiring-stories__slider-item">
                                    <div class="inspiring-stories__slider-item-img">
                                        <img src="../img/inspire/insp2.png" alt="">
                                    </div>
                                    <div class="person">
                                        <div class="person-name">
                                            David R., 27
                                        </div>
                                        <div class="person-description">
                                            I used to struggle with my weight and felt stuck in a cycle of unhealthy habits. FitSphere changed everything for me. The structured programs and motivational trainers helped me lose 15 kg and build a lean, muscular physique. For the first time in my life, I feel confident in my body and proud of what I’ve achieved
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="inspiring-stories__slider-item">
                                    <div class="inspiring-stories__slider-item-img">
                                        <img src="../img/inspire/insp3.png" alt="">
                                    </div>
                                    <div class="person">
                                        <div class="person-name">
                                            Anna B., 32
                                        </div>
                                        <div class="person-description">
                                            FitSphere’s HIIT programs are amazing! The short yet intense workouts fit perfectly into my busy schedule. I feel more energetic throughout the day
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="inspiring-stories__slider-item">
                                    <div class="inspiring-stories__slider-item-img">
                                        <img src="../img/inspire/insp4.png" alt="">
                                    </div>
                                    <div class="person">
                                        <div class="person-name">
                                            Tom W., 37
                                        </div>
                                        <div class="person-description">
                                            I was skeptical about online training, but FitSphere exceeded my expectations. The quality of content and support from trainers is top-notch!
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="get-start">
            <div class="container">
                <div class="get-start__content">
                    <div class="get-start__content-left">
                        <div class="get-start__title">
                            Ready to <span>Get Started?</span>
                        </div>
                        <div class="get-start__description">
                            Join thousands of happy clients achieving their fitness goals with FitSphere
                        </div>
                        <div class="get-start__preview">
                            <img src="../img/getstart.png" alt="">
                        </div>
                        <div class="get-start__buttons">
                            <div class="get-start__sign-in-button get-start-button" @click="router.push({name: 'sign-in'})">
                                Sign Up Now
                            </div>
                            <div class="get-start__explore-button get-start-button" @click="router.push({name: 'courses'})">
                                Explore Courses
                            </div>
                        </div>
                    </div>
                    <div class="get-start__content-right">
                        <div class="get-start__content-right-img">
                            <img src="../img/getstart.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {reactive} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const swiperOptions = reactive({
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 22,
            slideToClickedSlide: true,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 26,
        }
    }
})
</script>
<style lang="scss">
.main-page {
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
    .transform-block {
        @include mqm(1024) {
            background-image: url("../img/transform@1024.jpg");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: right 50%;
        }
    }
}
</style>
