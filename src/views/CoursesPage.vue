<template>
    <div class="courses">
        <div class="courses__blick">
            <svg width="510" height="939" viewBox="0 0 510 939" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_834_840)">
                    <circle cx="469.5" cy="469.5" r="119.5" fill="#2471B2"/>
                </g>
                <defs>
                    <filter id="filter0_f_834_840" x="0" y="0" width="939" height="939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_834_840"/>
                    </filter>
                </defs>
            </svg>

        </div>
        <div class="courses__container">
            <div class="page-name">
                Courses
            </div>
            <div class="courses__list">
                <div class="course-item" v-for="course in courses" :key="course.id" @click="router.push(`/course-group/${course.id}`)">
                    <div class="course-item__content">
                        <div class="course-item__image" v-if="course.images.length">
                            <img :src="`${BaseUrl}/image/${course.images[course.images.length - 1]}`" alt="" onload="">
                            <div class="course-item__image-wrap"></div>
                        </div>
                        <div class="course-item__title">
                            {{ course.name }}
                        </div>
                    </div>
                    <arrow-right class="course-item__arrow-right-icon" />
                </div>
            </div>
            <div class="fitness-logo">
                <svg width="1280" height="160" viewBox="0 0 1280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_834_838" fill="white">
                        <path d="M0 156.098V3.90244H100.239V30.1649H32.0339V70.9821H94.2987V96.1899H32.0339V156.098H0ZM140.695 156.098V3.90244H172.729V156.098H140.695ZM257.842 156.098V30.1649H211.911V3.90244H335.805V30.1649H289.876V156.098H257.842ZM429.722 160C393.127 160 370.004 142.597 368.2 115.597L368.094 113.909H398.961L399.066 114.964C400.234 126.355 412.643 134.054 430.571 134.054C447.648 134.054 459.422 125.933 459.422 114.225V114.12C459.422 104.1 451.891 98.5102 432.905 94.6077L416.78 91.3381C384.958 84.9044 371.276 70.1384 371.276 47.0403V46.9348C371.276 18.6683 395.672 0 429.615 0C465.361 0 486.365 18.7738 488.38 44.1924L488.486 45.5637H458.361L458.149 44.2979C456.346 33.4345 445.74 25.8404 429.615 25.8404C413.811 25.9459 403.31 33.118 403.31 44.5089V44.6143C403.31 54.5286 410.735 60.4351 428.768 64.1264L444.996 67.3962C477.348 74.0409 491.455 86.9083 491.455 110.639V110.745C491.455 140.91 467.909 160 429.722 160ZM517.447 156.098V3.90244H595.769C628.014 3.90244 649.548 24.5748 649.548 55.8997V56.1107C649.548 87.4358 628.014 108.108 595.769 108.108H551.489V156.098H517.447ZM587.919 29.11H551.489V83.2168H587.919C606.269 83.2168 617.089 73.5135 617.089 56.2162V56.0052C617.089 38.708 606.269 29.11 587.919 29.11ZM689.898 156.098V3.90244H721.931V65.7087H790.878V3.90244H822.912V156.098H790.878V91.971H721.931V156.098H689.898ZM870.899 156.098V3.90244H972.306V30.1649H902.933V66.8688H968.381V91.3381H902.933V129.835H972.306V156.098H870.899ZM1016.9 156.098V3.90244H1080.65C1115.44 3.90244 1135.38 22.3599 1135.38 52.3139V52.5246C1135.38 72.0369 1125.2 88.8069 1107.7 95.6625L1139.94 156.098H1103.67L1075.13 100.409H1048.93V156.098H1016.9ZM1048.93 77.205H1077.15C1093.16 77.205 1102.6 68.1344 1102.6 53.1575V52.9466C1102.6 38.2861 1092.74 28.7936 1076.72 28.7936H1048.93V77.205ZM1178.6 156.098V3.90244H1280V30.1649H1210.63V66.8688H1276.08V91.3381H1210.63V129.835H1280V156.098H1178.6Z"/>
                    </mask>
                    <path d="M0 156.098V3.90244H100.239V30.1649H32.0339V70.9821H94.2987V96.1899H32.0339V156.098H0ZM140.695 156.098V3.90244H172.729V156.098H140.695ZM257.842 156.098V30.1649H211.911V3.90244H335.805V30.1649H289.876V156.098H257.842ZM429.722 160C393.127 160 370.004 142.597 368.2 115.597L368.094 113.909H398.961L399.066 114.964C400.234 126.355 412.643 134.054 430.571 134.054C447.648 134.054 459.422 125.933 459.422 114.225V114.12C459.422 104.1 451.891 98.5102 432.905 94.6077L416.78 91.3381C384.958 84.9044 371.276 70.1384 371.276 47.0403V46.9348C371.276 18.6683 395.672 0 429.615 0C465.361 0 486.365 18.7738 488.38 44.1924L488.486 45.5637H458.361L458.149 44.2979C456.346 33.4345 445.74 25.8404 429.615 25.8404C413.811 25.9459 403.31 33.118 403.31 44.5089V44.6143C403.31 54.5286 410.735 60.4351 428.768 64.1264L444.996 67.3962C477.348 74.0409 491.455 86.9083 491.455 110.639V110.745C491.455 140.91 467.909 160 429.722 160ZM517.447 156.098V3.90244H595.769C628.014 3.90244 649.548 24.5748 649.548 55.8997V56.1107C649.548 87.4358 628.014 108.108 595.769 108.108H551.489V156.098H517.447ZM587.919 29.11H551.489V83.2168H587.919C606.269 83.2168 617.089 73.5135 617.089 56.2162V56.0052C617.089 38.708 606.269 29.11 587.919 29.11ZM689.898 156.098V3.90244H721.931V65.7087H790.878V3.90244H822.912V156.098H790.878V91.971H721.931V156.098H689.898ZM870.899 156.098V3.90244H972.306V30.1649H902.933V66.8688H968.381V91.3381H902.933V129.835H972.306V156.098H870.899ZM1016.9 156.098V3.90244H1080.65C1115.44 3.90244 1135.38 22.3599 1135.38 52.3139V52.5246C1135.38 72.0369 1125.2 88.8069 1107.7 95.6625L1139.94 156.098H1103.67L1075.13 100.409H1048.93V156.098H1016.9ZM1048.93 77.205H1077.15C1093.16 77.205 1102.6 68.1344 1102.6 53.1575V52.9466C1102.6 38.2861 1092.74 28.7936 1076.72 28.7936H1048.93V77.205ZM1178.6 156.098V3.90244H1280V30.1649H1210.63V66.8688H1276.08V91.3381H1210.63V129.835H1280V156.098H1178.6Z" stroke="#0F4A7C" stroke-width="2" mask="url(#path-1-inside-1_834_838)"/>
                </svg>

            </div>
        </div>
    </div>
</template>
<script setup>
    import ArrowRight from '@/img/svg/arrow-right.svg';
    import {onMounted, ref} from "vue";
    import api from "@/services/client.js";
    import {useRouter} from "vue-router";
    const courses = ref();
    const BaseUrl = ref(import.meta.env.VITE_BASE_API);
    const router = useRouter();
    async function fetchCourses() {
        const response = await api.get('/groups');
        setCourses(response);
    }
    function setCourses(data) {
        courses.value = data;
    }
    onMounted(() => {
        fetchCourses();
    })
</script>
<style lang="scss">
.courses {
    position: relative;
    padding-top: 30px;
    @include mqm(1024) {
        padding: 50px 0;
    }
    .fitness-logo {
        @include mqm(1024) {
            margin: 80px 0 80px 0;
        }
        svg {
            margin: 0 auto;
        }
    }
    &__list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        @include mqm(1024) {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
    }
    &__blick {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: -30%;
        @include mqm(1024) {
            bottom: -20%;
        }
    }
    .page-name {
        font-size: 20px;
        margin: 0 0 30px 0;
        line-height: 19px;
        background: #1969AD;
        font-style: italic;
        font-family: 'AtkinsonHyperlegible',serif;
        font-weight: 700;
        background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
        -webkit-background-clip: text;
        text-align: center;
        -webkit-text-fill-color: transparent;
        @include mqm(1024) {
            text-align: center;
        }
    }
    &__container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
    .course-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-radius: 30px;
        background-color: #fff;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        cursor: pointer;
        min-height: 130px;

        &:hover img{
            transform: scale(1.1);
        }
        &__title {
            font-size: 20px;
            font-weight: 700;
        }
        &__content {
            display: flex;
            align-items: center;
        }
        &__image {
            overflow: hidden;
            background-color: #d7d6db;
            width: 100px;
            margin-right: 15px;
            transition: 500ms all ease;
            border-radius: 25px;
            height: 100px;
            img {
                overflow: hidden;
                transition: 500ms all ease;
                border-radius: 25px;
                height: 100%;
            }
        }
    }
}
</style>
