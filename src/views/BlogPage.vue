<template>
    <div class="blog-page">
        <div class="container">
            <div class="page-name">
                Blog
            </div>
            <div class="blog-list">
                <div class="blog-card" v-for="item in blogList" :key="item.id">
                    <div class="blog-card__image" >
                        <img :src="`${BaseUrl}/image/${item.images[0]}`" alt="">
                    </div>
                    <div class="blog-card__content">
                        <div class="blog-card__title">
                            {{ item.title }}
                        </div>
                        <div class="blog-card__slogan">
                            {{ item.slogan }}
                        </div>
                        <div class="blog-card__description">
                            <p>{{ item.content }}</p>
                        </div>
                        <div class="blog-card__button primary-button-hover" @click="() => {show = true; activePost = blogList.find((el) => el.id === item.id)}">
                            Read
                        </div>
                    </div>
                </div>
            </div>
            <popup v-model="show">
                <div class="popup__post">
                    <div class="popup__title-desc">
                        {{ activePost.title }}
                    </div>
                    <div class="popup__post-img">
                        <img src="#" alt="" v-if="!activePost?.images?.length">
                        <img :src="`${BaseUrl}/image/${activePost?.images[0]}`" alt="" v-else>
                    </div>
                    <div class="popup__title">
                        {{ activePost.title }}
                    </div>
                    <div class="popup__slogan">
                        {{ activePost.quote }}
                    </div>
                    <div class="popup__post-descr" v-html="activePost.content"/>
                </div>
            </popup>
        </div>
    </div>
</template>
<script setup>
import Popup from "@/components/Popup.vue";
import {ref, reactive, onMounted} from "vue";
import api from "@/services/client.js";
// const imageUrl = new URL('./logo.png', import.meta.url).href
const show = ref(false);
const activePost = ref({});
const BaseUrl = ref(import.meta.env.VITE_BASE_API);
const blogList = ref();
const posts = reactive([
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHlvZ2F8ZW58MHx8MHx8fDA%3D',
        title: 'How Science is Changing the Approach to Fitness: From Myths to Facts',
        slogan: 'The Scientific Approach to Training: Why Precision Matters in Fitness',
        description: 'The fitness industry has come a long way in recent decades. What was once driven by hearsay, trends, and quick fixes is now grounded in scientific research and evidence-based strategies. The age of guessing has given way to a new era of precision, where each workout, nutrition plan, and recovery strategy is carefully calculated based on your individual needs and scientific principles.\n' +
            '\n' +
            '1. Biomechanics and Injury Prevention One of the biggest advancements in fitness science is the understanding of biomechanics. The study of how your body moves—whether it’s during a squat, a sprint, or a plank—helps us understand how to maximize the effectiveness of each exercise while minimizing the risk of injury. For example, small adjustments to the alignment of your knees or feet can take the pressure off sensitive joints like your hips or lower back, preventing chronic pain or strain. By using biomechanical principles, we tailor exercises specifically to each person’s body structure and abilities.\n' +
            '\n' +
            'Moreover, many common fitness injuries stem from poor form. A certified trainer trained in biomechanics can analyze your movements and offer corrective techniques that will allow you to get more from your workout and stay injury-free in the long run.\n' +
            '\n' +
            '2. Physiology and Workout Intensity Our bodies don’t all respond the same way to exercise. Factors like genetics, age, gender, and fitness level can alter how we build muscle, burn fat, and improve endurance. This is where physiology comes in—a field of science that looks at how the body adapts to physical stress.\n' +
            '\n' +
            'Based on physiological principles, fitness programs should be tailored to your individual needs. For example, if you\'re aiming for fat loss, studies have shown that high-intensity interval training (HIIT) is one of the most efficient ways to burn calories and increase metabolism. On the other hand, those looking to build muscle may need to focus on strength training with higher resistance and lower repetitions. Understanding these physiological differences allows us to personalize your training so you can reach your goals faster.\n' +
            '\n' +
            '3. Data-Driven Progress Tracking The use of technology in fitness has skyrocketed in recent years, and it’s changing the way we monitor progress. Wearable devices, fitness trackers, and mobile apps allow us to gather data on your heart rate, calories burned, distance, steps taken, and even sleep quality. This information offers a real-time insight into how your body is responding to training and allows you to adjust your workouts accordingly.\n' +
            '\n' +
            'For instance, if your heart rate is consistently too high during a workout, it might mean you\'re pushing yourself too hard, and you may need to reduce the intensity. Alternatively, if you’re not burning as many calories as you expect, it could signal a need to increase your exercise duration or mix up your routine. Data-driven approaches offer precision—ensuring that each workout is optimally structured to meet your fitness goals.\n' +
            '\n' +
            'At our platform, we leverage this wealth of scientific research and data to create training programs that are not only effective but also safe. Our certified coaches are experts in translating complex scientific principles into practical, easy-to-follow workout plans that deliver results.',
    },
    {
        id: 2,
        img: '../img/blog2.png',
        title: '5 Common Fitness Mistakes Beginners Make (And How to Avoid Them)',
        slogan: 'Avoid These 5 Mistakes to Accelerate Your Fitness Journey',
        description: 'Starting a fitness routine can be an exciting, but sometimes daunting, experience. Everyone has to start somewhere, and it’s easy to get caught up in excitement and dive headfirst into a new workout program. However, many beginners make the same common mistakes that can hinder their progress and even lead to injury. If you’re just beginning your fitness journey—or looking to fine-tune your approach—avoid these pitfalls to ensure you’re setting yourself up for success.\n' +
            '\n' +
            '1. Skipping Warm-Ups and Cool-Downs While you may be eager to jump straight into your workout, skipping the warm-up and cool-down is a critical mistake that many beginners make. Warming up is essential to prepare your muscles, joints, and cardiovascular system for the intensity of exercise. A proper warm-up increases blood flow to your muscles, increases your heart rate gradually, and enhances flexibility. It doesn’t have to be complicated—simple dynamic stretches or light cardio can do the trick.\n' +
            '\n' +
            'Cool-downs are equally important. They allow your heart rate to return to normal and help prevent muscle stiffness and soreness. Ignoring these key components can leave you vulnerable to injury and slow your progress.\n' +
            '\n' +
            '2. Setting Unrealistic Goals One of the most common reasons people quit their fitness programs is because they set goals that are too ambitious, too soon. While it’s important to be motivated and have a clear vision of what you want to achieve, setting unrealistic goals can lead to burnout and frustration.\n' +
            '\n' +
            'Start by setting small, attainable goals. For instance, instead of aiming to lose 20 pounds in a month, aim for 1-2 pounds per week. If you’re trying to build strength, start with a manageable weight and gradually increase it as your body adapts. Small wins lead to bigger successes, so don’t rush the process—consistency over time is what drives long-term results.\n' +
            '\n' +
            '3. Lack of Workout Variety Another mistake beginners make is sticking to the same type of exercise week after week. While consistency is key, repeating the same routine day after day can lead to plateaus where you stop seeing progress. Your body adapts to the stress placed on it, meaning that your muscles and cardiovascular system need new challenges to keep improving.\n' +
            '\n' +
            'By adding variety to your workouts, such as alternating between cardio, strength training, flexibility, and mobility work, you can avoid hitting a wall. Variety also keeps things interesting and motivates you to keep working toward your goals.\n' +
            '\n' +
            '4. Neglecting Recovery When you’re new to exercise, it’s easy to think that more is better. However, recovery is just as important as your workouts. Overtraining can lead to burnout, exhaustion, and injury. Your muscles grow and repair during periods of rest, not during the workout itself.\n' +
            '\n' +
            'Incorporating rest days into your routine, prioritizing sleep, and stretching after workouts are essential for recovery. Over time, your body will become stronger and more resilient, but only if you give it the time it needs to repair and rebuild.\n' +
            '\n' +
            '5. Underestimating the Importance of Nutrition Many beginners focus solely on workouts but neglect the crucial role that nutrition plays in fitness. No matter how hard you train, a poor diet can prevent you from reaching your full potential. A well-balanced diet that includes a mix of protein, healthy fats, and complex carbohydrates will help fuel your workouts, promote muscle recovery, and provide the energy you need to stay consistent.\n' +
            '\n' +
            'The right nutrition can help you lose fat, gain muscle, and recover faster, which in turn enhances your performance. Fueling your body properly is essential for seeing the results of all the hard work you put in.',
    },
])
async function fetchBlog() {
    blogList.value = await api.get('/posts');
}
onMounted(() => {
    fetchBlog();
})
</script>
<style lang="scss">
.blog-page {
    margin-bottom: 100px;
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 180px;
        }
    }
    .page-name {
        font-size: 20px;
        text-align: center;
        margin: 0 0 30px 0;
        background: #1969AD;
        font-style: italic;
        font-family: 'AtkinsonHyperlegible',serif;
        font-weight: 700;
        background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .popup {
        &__title {
            display: block;
            margin-top: 30px;
            font-size: 24px;
            line-height: 23px;
            color: #000;
            font-weight: 700;
            @include mqm(1024) {
                display: none;
            }
        }
        &__title-desc {
            display: none;
            font-size: 24px;
            line-height: 23px;
            color: #000;
            font-weight: 700;
            @include mqm(1024) {
                display: block;
                font-size: 50px;
                line-height: 51px;
            }
        }
        &__post-img {
            height: 313px;
            @include mqm(1024) {
                height: 500px;
                max-width: 500px;
                margin: 0 auto;
                margin-top: 50px;
            }
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        &__slogan {
            font-size: 18px;
            margin-top: 20px;
            line-height: 19px;
            font-family: 'Roboto-Italic';
            color: #000;
        }
        &__post-descr {
            margin-top: 20px;
            font-size: 14px;
            line-height: 16px;
            color: #000;

        }
    }
    .blog-card {
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        @include mqm(1024) {
            display: flex;
            padding: 50px;
            justify-content: space-between;
            &__content {
                padding-left: 20px;
            }
        }
        &__description {
            display: none;
            margin-top: 20px;
            font-size: 14px;
            max-height: 169px;
            p {
                display: -webkit-box;
                -webkit-line-clamp: 8;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            @include mqm(1024) {
                display: block;
            }
        }
        &:not(:first-child) {
            margin-top: 50px;
        }
        &__image {
            flex: 0 0 auto;
            height: 313px;
            @include mqm(1024) {
                height: 363px;
                min-width: 363px;
            }
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        &__title {
            margin-top: 20px;
            font-size: 24px;
            color: #000000;
            font-weight: 700;
            line-height: 23px;
        }
        &__slogan {
            margin-top: 20px;
            font-family: 'Roboto-Italic';
            font-size: 18px;
            line-height: 17px;
        }
        &__button {
            padding: 23px 0;
            border-radius: 20px;
            line-height: 14px;
            border: 1px solid #1969AD;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 20px;
            color: #1969AD;
            text-align: center;
            min-width: 246px;
            margin-top: 30px;
            cursor: pointer;
            @include mqm(1024) {
                max-width: 246px;
                margin-left: auto;
                margin-top: 30px;
            }
        }
    }
}
</style>
