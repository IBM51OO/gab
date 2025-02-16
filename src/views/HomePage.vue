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
            <div class="fitness-backed__title displayBox" data-aos="zoom-in" data-aos-duration="1000">
                Your Fitness <span>Backed By Science</span>
            </div>
            <div class="fitness-backed__img displayBox" data-aos="zoom-in" data-aos-duration="1000">
                <img src="../img/backed.jpg" alt="">
            </div>
            <div class="fitness-backed__content">
                <div class="fitness-backed__title-desk displayBox" data-aos="zoom-in" data-aos-duration="1000">
                    <span>Your Fitness</span> <span>Backed By Science</span>
                </div>
                <div class="fitness-backed__description displayBox" data-aos="zoom-in" data-aos-duration="1000">
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
        <div class="fitness-advantages">
            <div class="container">
                <div class="fitness-advantages__list">
                    <div class="fitness-advantages__item displayBox" data-aos="fade-up">
                        <div class="fitness-advantages__item-img">
                            <img src="../img/2k.png" alt="">
                        </div>
                        <div class="fitness-advantages__item-name">
                            2,000+ users trust our courses!
                        </div>
                    </div>
                    <div class="fitness-advantages__item displayBox" data-aos="fade-up">
                        <div class="fitness-advantages__item-img">
                            <img src="../img/rate.png" alt="">
                        </div>
                        <div class="fitness-advantages__item-name">
                            95% see results fast!
                        </div>
                    </div>
                    <div class="fitness-advantages__item displayBox" data-aos="fade-up">
                        <div class="fitness-advantages__item-img">
                            <img src="../img/dude.png" alt="">
                        </div>
                        <div class="fitness-advantages__item-name">
                            Expert-designed <br>workouts!
                        </div>
                    </div>
                    <div class="fitness-advantages__item displayBox" data-aos="fade-up">
                        <div class="fitness-advantages__item-img">
                            <img src="../img/clock.png" alt="">
                        </div>
                        <div class="fitness-advantages__item-name">
                            Train anytime,<br>anywhere!
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="experts-block">
            <div class="container">
                <div class="experts-block__title" data-aos="fade-right" data-aos-duration="1000">
                    <span>Meet the Experts Who'll</span>
                    Guide Your Fitness Journey
                </div>
                <div class="experts-list">
                    <div class="expert" data-aos="fade-right" data-aos-duration="1000">
                        <div class="expert-image">
                            <img src="../img/1.png" alt="">
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
                    <div class="expert" data-aos="fade-up" data-aos-duration="1000">
                        <div class="expert-image">
                            <img src="../img/2.png" alt="">
                        </div>
                        <div class="expert-description">
                            <div class="expert-description__name">
                                James Rodriguez
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
                    <div class="expert" data-aos="fade-left" data-aos-duration="1000">
                        <div class="expert-image" >
                            <img src="../img/3.png" alt="">
                        </div>
                        <div class="expert-description">
                            <div class="expert-description__name">
                                Oliver Smith
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
                </div>

            </div>
        </div>
        <div class="fitness-reasons">
            <div class="fitness-reasons__blick">
                <svg width="538" height="939" viewBox="0 0 538 939" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_797_166)">
                        <circle cx="469.5" cy="469.5" r="119.5" fill="#2471B2"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_797_166" x="0" y="0" width="939" height="939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_797_166"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <div class="container-wise">
                <div class="fitness-reasons__title" data-aos="fade-left" data-aos-duration="1000">
                    3 Reasons to Choose Us for Your Fitness Journey
                </div>
                <div class="fitness-reasons__list">
                    <div class="fitness-reasons__item" data-aos="fade-left" data-aos-duration="1000">
                        <div class="fitness-reasons__label">
                            Expertly Designed Courses
                        </div>
                        <div class="fitness-reasons__value">
                            Our fitness programs are crafted by professional trainers with years of experience, ensuring scientifically backed workouts that maximize results for all fitness levels.
                        </div>
                    </div>
                    <div class="fitness-reasons__item" data-aos-delay="50" data-aos="fade-left" data-aos-duration="1000">
                        <div class="fitness-reasons__label">
                            Comprehensive & Structured Approach
                        </div>
                        <div class="fitness-reasons__value">
                            We offer step-by-step training plans, covering strength, cardio, mobility, and specialized goal-based programs, helping you achieve long-term progress without confusion.
                        </div>
                    </div>
                    <div class="fitness-reasons__item" data-aos-delay="100" data-aos="fade-left" data-aos-duration="1000">
                        <div class="fitness-reasons__label">
                            Flexible & Accessible for Everyone
                        </div>
                        <div class="fitness-reasons__value">
                            Whether you're a beginner or an advanced athlete, our courses provide customizable, time-efficient workouts that fit into any schedule, making fitness easy, effective, and sustainable.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inspiring-stories">
            <div class="container">
                <div class="inspiring-stories__title" data-aos="fade-left" data-aos-duration="1000">
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
                                <div class="inspiring-stories__slider-item" data-aos-offset="200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
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
                                <div class="inspiring-stories__slider-item" data-aos-offset="200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
                                <div class="inspiring-stories__slider-item" data-aos-offset="200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
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
                                <div class="inspiring-stories__slider-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
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
        <div class="fitness-explore">
            <div class="fitness-explore__blick">
                <svg width="518" height="939" viewBox="0 0 518 939" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_797_169)">
                        <circle cx="469.5" cy="469.5" r="119.5" fill="#2471B2"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_797_169" x="0" y="0" width="939" height="939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_797_169"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <div class="container">
                <div class="fitness-explore__title" data-aos="fade-up" data-aos-duration="1000">
                    Explore Some of Our Top Courses
                </div>
                <div class="fitness-explore__description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    From strength training to cardio, mobility, and specialized fitness programs – our expertly crafted courses help you achieve your goals efficiently. Whether you're a beginner or an advanced athlete, there's a perfect program for you!
                </div>
                <div class="fitness-explore__items" v-if="courses">
                    <div class="fitness-explore__item" data-aos="fade-right" data-aos-duration="1000" @click="router.push(`/course/${courses[0].id}`)">
                        <div class="fitness-explore__item-img">
                            <img src="../img/33.png" alt="">
                        </div>
                        <div class="fitness-explore__item-title">
                            {{ courses[0].name }}
                        </div>
                    </div>
                    <div class="fitness-explore__item" data-aos="fade-up" data-aos-duration="1000" @click="router.push(`/course/${courses[1].id}`)">
                        <div class="fitness-explore__item-img">
                            <img src="../img/11.png" alt="">
                        </div>
                        <div class="fitness-explore__item-title">
                            {{ courses[1].name }}
                        </div>
                    </div>
                    <div class="fitness-explore__item" data-aos="fade-left" data-aos-duration="1000" @click="router.push(`/course/${courses[2].id}`)">
                        <div class="fitness-explore__item-img">
                            <img src="../img/11.png" alt="">
                        </div>
                        <div class="fitness-explore__item-title">
                            {{ courses[2].name }}
                        </div>
                    </div>
                </div>
                <div class="fitness-explore__all-courses" @click="router.push({name: 'courses'})">
                    View All Courses
                </div>
            </div>
        </div>
        <div class="get-start">
            <div class="get-start__blick">
                <svg width="518" height="939" viewBox="0 0 518 939" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_826_355)">
                        <circle cx="469.5" cy="469.5" r="119.5" fill="#2471B2"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_826_355" x="0" y="0" width="939" height="939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_826_355"/>
                        </filter>
                    </defs>
                </svg>

            </div>
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
                            <div class="get-start__sign-in-button get-start-button primary-button" @click="router.push({name: 'sign-in'})">
                                Sign Up Now
                            </div>
                            <div class="get-start__explore-button get-start-button primary-button-hover" @click="router.push({name: 'courses'})">
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
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import api from "@/services/client.js";
const router = useRouter();
const courses = ref();
const BaseUrl = ref(import.meta.env.VITE_BASE_API);
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
async function fetchCourses() {
    courses.value = (await api.get('/courses')).filter((el) => el.id === '1e9178c8aa7642dab6b0f70a0a8db0da' || el.id === 'ef150c4738d54d61afcc242cdff3fc77' || el.id === 'd58faf1ae0c84d66873a6356d7c871dc');
}
onMounted(() => {
    fetchCourses();
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
            background-image: url("../img/transform@1024.png");
            background-repeat: no-repeat;
            background-size: 830px;
            background-position: right 20%;
        }
    }
    .fitness-advantages {
        background-color: rgba(72, 135, 189, 0.1);
        box-shadow: 0px -5px 8px -4px rgba(0, 0, 0, 0.27) inset;
        &__list {
            padding: 50px 0;
            display: grid;
            gap: 30px;
            grid-template-columns: 1fr;
            @include mqm(1024) {
                grid-template-columns: 1fr 1fr;
                padding: 100px 0;
            }
        }
        &__item {
            background-color: #fff;
            border-radius: 30px;
            padding: 15px 30px;
            display: flex;
            align-items: center;
            min-height: 100px;
            cursor: pointer;
            transition: 1000ms all ease;
            &:hover {
                background-color: rgba(4, 125, 232, 0.4);
            }
            @include mqm(1024) {
                min-height: auto;
            }
        }
        &__item-img {
            width: 70px;
        }
        &__item-name {
            font-size: 18px;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
            color: #000;
            margin-left: 50px;
        }
    }
    .fitness-reasons {
        position: relative;
        overflow: hidden;
        &__title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            font-size: 40px;
            background: #1969AD;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 40px;
            max-width: 930px;
            margin: 0 auto;
            @include mqm(1024) {
                font-size: 48px;
                text-align: center;
                margin: 0 auto 10px auto;
            }
        }
        &__blick {
            position: absolute;
            height: 239px;
            right: 0;
            display: none;
            @include mqm(1024) {
                display: block;
            }
        }
        &__item {
            display: flex;
            align-items: center;
            flex-direction: column;
            border-bottom: 1px solid #000000;
            max-width: 1204px;
            margin: 0 auto;
            padding: 25px 0;
            transition: 500ms all ease;
            &:hover {
                background-color: #1969AD;
            }
            &:hover .fitness-reasons__label  {
                color: #fff;
            }
            &:hover .fitness-reasons__value  {
                color: #fff;
            }
            @include mqm(1024) {
                font-size: 48px;
                padding: 25px 60px;
                flex-direction: row;
            }
            &:last-child {
                border-bottom: none;
            }
        }
        &__label {
            transition: 500ms all ease;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #1A69AD;
            font-size: 24px;
            margin-bottom: 10px;
            width: 100%;
            @include mqm(1024) {
                max-width: 278px;
                margin-right: 25px;
                margin-bottom: 0;
            }
        }
        &__list {
            padding-bottom: 50px;
        }
        &__value {
            transition: 500ms all ease;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            max-width: 733px;
            @include mqm(1024) {
                font-size: 18px;
            }
        }
        .container-wise {
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0 188px;
            }
        }
    }
    .fitness-explore {
        overflow: hidden;
        position: relative;
        background-color: rgba(72, 135, 189, 0.1);
        box-shadow: 0px -5px 8px -4px rgba(0, 0, 0, 0.27) inset;
        padding-bottom: 20px;
        @include mqm(1024) {
            padding-bottom: 50px;
        }
        &__blick {
            position: absolute;
            right: 0;
            top: 50%;
            @include mqm(1024) {
                top: -45%;
            }
        }
        &__title {
            padding: 80px 0 20px 0;
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            font-size: 40px;
            background: #1969AD;
            letter-spacing: 1px;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 40px;
            text-align: center;
            @include mqm(1024) {
                font-size: 48px;
                line-height: 48px;
                text-align: center;
            }
        }
        &__item {
            cursor: pointer;
        }
        &__description {
            max-width: 625px;
            margin: 0 auto;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 50px;
        }
        &__items {
            @include mqm(1024) {
                display: flex;
                gap: 100px;
            }
        }
        &__item-title {
            text-align: center;
            font-family: 'Roboto-Regular', sans-serif;
            font-weight: 500;
            font-size: 20px;
            margin: 30px auto;
            letter-spacing: 1px;
            @include mqm(1024) {
                margin: 0 auto;
                max-width: 305px;
                margin-top: 20px;
            }
        }
        &__all-courses {
            position: relative;
            margin: 50px auto;
            padding: 14px 0;
            text-align: center;
            cursor: pointer;
            width: 100%;
            border: 1px solid #1969AD;
            border-radius: 20px;
            color: #1969AD;
            font-size: 20px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            background-color: #fff;
            @include mqm(1024) {
                max-width: 262px;
            }
        }
        &__all-courses::before {
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
        &__all-courses:hover {
            color: #fff;
            background-color: transparent;
        }
        &__all-courses:hover::before {
            opacity: 1;
        }
    }
}
</style>
