<template>
    <div class="about-us">
        <div class="container">
            <div class="page-name">
                About Us
            </div>
            <div class="about-us__cases">
                <div class="our-mission">
                    <div class="our-mission__wrapper">
                        <div class="our-mission__title">
                            Our Mission
                        </div>
                        <div class="our-mission__slogan">
                            Inspiring Fitness, One Step at a Time
                        </div>
                        <div class="our-mission__description">
                            Our mission at FitSphere is to empower individuals to take control of their health and well-being through science-backed fitness solutions. We believe that everyone, regardless of their starting point, deserves access to programs that are not only effective but also safe and enjoyable. FitSphere is more than just a platform—it's a movement towards healthier lives, stronger bodies, and more confident minds.
                        </div>
                    </div>
                    <div class="our-mission__image">
                        <img src="../img/aboutus1.png" alt="">
                    </div>
                </div>
                <div class="our-mission">
                    <div class="our-mission__wrapper">
                        <div class="our-mission__title">
                            Why Choose FitSphere?
                        </div>
                        <div class="our-mission__slogan">
                            Your Fitness Journey Starts Here
                        </div>
                        <div class="our-mission__description">
                            At FitSphere, we stand out by combining the latest advancements in sports science with real-world training techniques. Our programs are crafted by certified fitness professionals and reviewed by experts to ensure they are safe, effective, and suitable for various fitness levels. Whether you’re a beginner or a seasoned athlete, our platform adapts to meet your needs and aspirations                    </div>
                    </div>
                    <div class="our-mission__image">
                        <img src="../img/aboutus2.png" alt="">
                    </div>
                </div>
                <div class="our-mission">
                    <div class="our-mission__wrapper">
                        <div class="our-mission__title">
                            Meet Our Team
                        </div>
                        <div class="our-mission__slogan">
                            Certified Trainers, Passionate Experts
                        </div>
                        <div class="our-mission__description">
                            Our team is the backbone of FitSphere. Each of our trainers is certified by leading fitness organizations and has extensive experience in their respective fields. From strength training specialists to yoga instructors, we’ve brought together a diverse group of professionals to create a holistic fitness experience

                            Our experts continuously update their knowledge to stay ahead of the latest trends and innovations in the fitness industry. With FitSphere, you’re not just getting a workout—you’re getting the guidance and support of some of the best in the business                    </div>
                    </div>
                    <div class="our-mission__image">
                        <img src="../img/aboutus3.png" alt="">
                    </div>
                </div>
                <div class="our-mission">
                    <div class="our-mission__wrapper">
                        <div class="our-mission__title">
                            Our Unique Approach
                        </div>
                        <div class="our-mission__slogan">
                            Science Meets Fitness
                        </div>
                        <div class="our-mission__description">
                            FitSphere’s approach is rooted in science. Every course we offer is designed with evidence-based methodologies to ensure maximum effectiveness. We use data and research to optimize every aspect of your fitness journey, from exercise selection to recovery protocols.

                            Unlike traditional fitness platforms, we don’t rely on fads or unproven methods. Our programs are designed to not only help you achieve your goals but also educate you on the principles of fitness and wellness. At FitSphere, you’ll learn how to train smarter, not just harder.                    </div>
                    </div>
                    <div class="our-mission__image">
                        <img src="../img/aboutus4.png" alt="">
                    </div>
                </div>
            </div>
            <div class="get-start">
                <div class="get-start__content">
                    <div class="get-start__content-left">
                        <div class="get-start__title">
                            Join the <span>FitSphere</span> Community
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
import {useRouter} from "vue-router";

const router = useRouter();
</script>
<style lang="scss">
.about-us {
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 180px;
        }
    }
    .page-name {
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 30px 0   ;
    }
    .get-start {
        &__buttons {
            margin-top: 40px;
        }
        .get-start-button {
            line-height: 14px;
            font-size: 20px;
            font-weight: 500;
        }
        &__title {
            span {
                @include mqm(1024) {
                    color: #576C7E;
                }
            }
        }
    }
}
.our-mission {
    @include mqm(1024) {
        display: flex;
        justify-content: center;
        gap: 130px;
        &:nth-child(2n) {
            padding-left: 20%;
            padding-right: 30px;
            .our-mission__wrapper {
                order: 2;
            }
            .our-mission__image {
                order: 1;
            }
        }
    }
    &:not(:first-child) {
        margin-top: 60px;
    }
    &__title {
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
        @include mqm(1024) {
            font-size: 50px;
            line-height: 51px;
        }
    }
    &__wrapper {
        @include mqm(1024) {
            max-width: 413px;
        }
    }
    &__slogan {
        font-size: 18px;
        line-height: 16px;
        color: #000;
        font-family: 'Roboto-Italic';
        margin-top: 15px;
        @include mqm(1024) {
            font-size: 20px;
        }
    }
    &__description {
        margin-top: 25px;
        font-size: 14px;
        color: #000;
        margin-bottom: 40px;
    }
    &__image {
        height: 353px;
        img {
            height: 100%;
            border-radius: 10px;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
