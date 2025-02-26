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
        <div class="fitness-explore" v-if="courses && groupBook">
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
            <div class="containedr">
                <div class="fitness-explore__title" data-aos="fade-up" data-aos-duration="1000">
                    Explore Some of Our Top Courses
                </div>
                <div class="fitness-explore__description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    From strength training to cardio, mobility, and specialized fitness programs – our expertly crafted courses help you achieve your goals efficiently. Whether you're a beginner or an advanced athlete, there's a perfect program for you!
                </div>
                <div class="fitness-explore__items">
                    <swiper :modules="[Navigation]" :breakpoints="swiperExploreOptions.breakpoints" :navigation="true" v-if="courses && groupBook">
                        <swiper-slide v-for="item in groupBook" :key="item.id">
                            <div class="fitness-explore__item" @click="router.push(`/course/${item.id}`)">
                                <div class="fitness-explore__item-img">
                                    <img :src="`${BaseUrl}/image/${item.images[item.images.length - 1]}`" alt="">
                                </div>
                                <div class="fitness-explore__item-title">
                                    {{ item.name }}
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="fitness-explore__items-mobile-wrapper">
                        <div class="container">
                            <div class="fitness-explore__items-mobile">
                                <div class="fitness-explore__item fitness-explore__item--mob" v-for="item in groupBook" :key="item.id" @click="router.push(`/course/${item.id}`)">
                                    <div class="fitness-explore__item-img">
                                        <img :src="`${BaseUrl}/image/${item.images[item.images.length - 1]}`" alt="">
                                    </div>
                                    <div class="fitness-explore__item-title">
                                        {{ item.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fitness-explore__all-courses" @click="router.push({name: 'courses'})">
                    View All Courses
                </div>
            </div>
        </div>
        <div class="courses-groups" v-if="courses && groupBook">
            <div class="container">
                <div class="courses-groups__list">
                    <div class="courses-groups__item primary-button-hover" v-for="item in groups" :key="item.id" @click="router.push(`/course-group/${item.id}`)">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="fitness-backed" v-if="courses && groupBook">
            <div class="fitness-backed__title" data-aos="zoom-in" data-aos-duration="1000">
                Your Fitness <span>Backed By Science</span>
            </div>
            <div class="fitness-backed__img" data-aos="zoom-in" data-aos-duration="1000">
                <img src="../img/backed.jpg" alt="">
            </div>
            <div class="fitness-backed__content">
                <div class="fitness-backed__title-desk" data-aos="zoom-in" data-aos-duration="1000">
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
        <div class="fitness-advantages" v-if="courses && groupBook">
            <div class="container">
                <div class="fitness-advantages__list">
                    <div class="fitness-advantages__item displayBox" data-aos="fade-up">
                        <div class="fitness-advantages__item-img">
                            <img src="../img/mission.png" alt="">
                        </div>
                        <div class="fitness-advantages__item-name">
                            Focus on Results
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
        <div class="our-comm-wrapper" v-if="courses && groupBook">
            <div class="our-comm">
                <div class="blick">
                    <svg width="460" height="904" viewBox="0 0 460 904" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_826_356)">
                            <circle cx="8" cy="452" r="102" fill="#2471B2"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_826_356" x="-444" y="0" width="904" height="904" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_826_356"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="our-comm__left">
                    <div class="our-comm__title">
                        The Science Behind Our Courses
                    </div>
                    <div class="our-comm__subtitle">
                        Every course is based on research, expert insights, and real-world results
                    </div>
                    <div class="our-comm__text">
                        At FitSphere, we don’t rely on guesswork—we rely on science. Each program is developed using findings from sports physiology, biomechanics, and nutrition studies. We incorporate expert insights from certified trainers, sports scientists, and physical therapists to ensure maximum efficiency and safety.
                    </div>
                </div>
                <div class="our-comm__right">
                    <div class="our-comm__key-points">
                        <div class="our-comm__key-points-title">
                            Key Points
                        </div>
                        <div class="our-comm__key-points-list">
                            <div class="our-comm__key-item" data-aos="fade-right" data-aos-duration="1000">
                                <div class="our-comm__key-item-img">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="36" height="36" fill="url(#pattern0_941_257)"/>
                                        <defs>
                                            <pattern id="pattern0_941_257" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlink:href="#image0_941_257" transform="translate(-0.00900901) scale(0.00900901)"/>
                                            </pattern>
                                            <image id="image0_941_257" width="113" height="111" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABvCAYAAADboi87AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVsSURBVHgB7Z2NVdswEIDPnYBu4E5QOkHpBnSCsgF0AsIEbSegG0AnCJ0g7QShE5ANrnf4DHm8xCc5snUS972nF96LLZ39If+cLaWBBCDiEX2cUnlPpaVyTOVISm3cUvnaNM09GKGBkYi4cyonUl4TGyofrIiMlrgl7wLq7Gmh3JHET2CAKIkk8BJcXs+GJL4FAwRJJHktfdxAd65zBJI4+nSUkjfaAiTwC32swAW+5BcYYfA/SQ6fC3BeYurCZm9PdIE7YXl3YEjgXkjgKcbzQOWayhmVY7mKdXLAFzEiJJQ1lQuXZgiREtrzLsCxBUm5DBS4xu62w7GEHEZDWLlAo2B3UeI9sFQCe+GDC7RJf594ErDslfl7o9eMnOcGD6Pg2CXwUHoGjl2wy7AMngvBMQ2fE7WnE7fgZEeOmEt8zqbdPF1oyhd+KDUMdrnoXanQ7o4B9TSbP0fMyIDAniWgjie2MxEg8LE3qhLByUKgwEfegGMO7E5hSwh7Ie2X90RjxPRA3LqwcYlGGCHwuF/RJRpgtEBZ2SVm5iCBUoFLzMjBAqUSl5iJJAKlIpeYgWQCpTKXODNJBUqFLnFGkguUSl3iTEwiUCp2iTMwmUCp3CVOzKQCpQGXOCGTC5RGXOJEzCJQGnKJEzCbQGnMJSZmVoHSoEtMyOwCpVGXmIgsAqVhl5iAbAKlcZd4IFkFSgAu8QCyC5QgXOJITAiUQFziCMwIlGCyScShQSKGMSVQAsoiEffPlzP9Rh+AOYESVC6JN0rTX8AYJgVKYLkkhmBmsiOzAiW4XBJDd8glZMa0QAkwl8QlhpNNpHmBEmQuiW3EzmG+wcwUIVACzSJR2maRawyHL4ZmGfRajEAJNptEaT9W5GpqkUUJlICzSpQYYkXysi1MQHECJejsEiWOI9RntppUZJECGS1SmBERqSUBJhFZrEBGixYyQM1+x3AO3qFFC2S0iCET1PQC4xiVpiteIKNFDRkZITIqTVeFQEaLHDKD3Uz/MQRld6oRyGjRgwFQnwkySmRVAhltC8AIkTue+ZagHvsCGW0rwBB4YJquZIGoTJVZjEQGR6bpKhA4OFXmIGAQHJemK/YQisMJkGWjibLyQ48vwe4wuYS0v+u4ofKJNvkPGEJxtCmyJ/ZgfJpuCLMXMVrgRUvswbg0XVECGS34KiQyGJ/dKUIgo21ANRKZESKLuA/UNqIqiQyGp+nWJQhktA2pTiKDzzfGu+Dexz12lnd1UqA5KvYWIwTsMhrHUvj24Z7KHW3SBgpCdVSzxFrQHPls/BXgEivAJVaAS6wAl1gBLrECXGIFuMQKcIkV4BIrgCUO5hFLShTXSMj+VyUSLTg5aZXv71mi9lJQEc/cKkbb/48S/ykLfQQnJ9r+/xvSE0/9vJiVU+X7P/1rfxpRQ8acNGDYQKK2X3ipLLgGZ3ZQf8t9xcv194m/lfpa743zQvv7HPQr0x/bK/AhVRur8IAFzEVaAxg+21b7csWQdzbXLnJaMHyw0PWulUN6I7NykdMgAkPn8mn3VRL6BvXaRaYF44brLbTKQv8TuNf6xU4CaD+eY/j4Sf1OAeOnsFxTOQMnCuxOXxcYN1g2/OIS42er6Bu4lnV5aLVnebbA5yHnZ7KfYjpKz87sTTPQ6II+sk/d7Dxx1TTNYtcXg6/ou0gz7BXIqOMspAvzPYkfHueHn/V+JYE/hxYKGiwjJ1Oe5KAFZy746dJnEnivLRj0jg1XROUd/XkFztRw7+PD54cQgUz0sDXplQsqo6amdPbC8jih/T12/OTosYci84QKZ9v9FY7x3EH3FClaXk+SAaRbQlnme+jOnS0422yk8Lnun3zephi1/B+s8RWJKHPlfQAAAABJRU5ErkJggg=="/>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="our-comm__key-item-title">
                                    Backed by research – evidence-based fitness principles                                    </div>
                            </div>
                            <div class="our-comm__key-item" data-aos="fade-right" data-aos-duration="1000">
                                <div class="our-comm__key-item-img">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="36" height="36" fill="url(#pattern0_941_257)"/>
                                        <defs>
                                            <pattern id="pattern0_941_257" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlink:href="#image0_941_257" transform="translate(-0.00900901) scale(0.00900901)"/>
                                            </pattern>
                                            <image id="image0_941_257" width="113" height="111" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABvCAYAAADboi87AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVsSURBVHgB7Z2NVdswEIDPnYBu4E5QOkHpBnSCsgF0AsIEbSegG0AnCJ0g7QShE5ANrnf4DHm8xCc5snUS972nF96LLZ39If+cLaWBBCDiEX2cUnlPpaVyTOVISm3cUvnaNM09GKGBkYi4cyonUl4TGyofrIiMlrgl7wLq7Gmh3JHET2CAKIkk8BJcXs+GJL4FAwRJJHktfdxAd65zBJI4+nSUkjfaAiTwC32swAW+5BcYYfA/SQ6fC3BeYurCZm9PdIE7YXl3YEjgXkjgKcbzQOWayhmVY7mKdXLAFzEiJJQ1lQuXZgiREtrzLsCxBUm5DBS4xu62w7GEHEZDWLlAo2B3UeI9sFQCe+GDC7RJf594ErDslfl7o9eMnOcGD6Pg2CXwUHoGjl2wy7AMngvBMQ2fE7WnE7fgZEeOmEt8zqbdPF1oyhd+KDUMdrnoXanQ7o4B9TSbP0fMyIDAniWgjie2MxEg8LE3qhLByUKgwEfegGMO7E5hSwh7Ie2X90RjxPRA3LqwcYlGGCHwuF/RJRpgtEBZ2SVm5iCBUoFLzMjBAqUSl5iJJAKlIpeYgWQCpTKXODNJBUqFLnFGkguUSl3iTEwiUCp2iTMwmUCp3CVOzKQCpQGXOCGTC5RGXOJEzCJQGnKJEzCbQGnMJSZmVoHSoEtMyOwCpVGXmIgsAqVhl5iAbAKlcZd4IFkFSgAu8QCyC5QgXOJITAiUQFziCMwIlGCyScShQSKGMSVQAsoiEffPlzP9Rh+AOYESVC6JN0rTX8AYJgVKYLkkhmBmsiOzAiW4XBJDd8glZMa0QAkwl8QlhpNNpHmBEmQuiW3EzmG+wcwUIVACzSJR2maRawyHL4ZmGfRajEAJNptEaT9W5GpqkUUJlICzSpQYYkXysi1MQHECJejsEiWOI9RntppUZJECGS1SmBERqSUBJhFZrEBGixYyQM1+x3AO3qFFC2S0iCET1PQC4xiVpiteIKNFDRkZITIqTVeFQEaLHDKD3Uz/MQRld6oRyGjRgwFQnwkySmRVAhltC8AIkTue+ZagHvsCGW0rwBB4YJquZIGoTJVZjEQGR6bpKhA4OFXmIGAQHJemK/YQisMJkGWjibLyQ48vwe4wuYS0v+u4ofKJNvkPGEJxtCmyJ/ZgfJpuCLMXMVrgRUvswbg0XVECGS34KiQyGJ/dKUIgo21ANRKZESKLuA/UNqIqiQyGp+nWJQhktA2pTiKDzzfGu+Dexz12lnd1UqA5KvYWIwTsMhrHUvj24Z7KHW3SBgpCdVSzxFrQHPls/BXgEivAJVaAS6wAl1gBLrECXGIFuMQKcIkV4BIrgCUO5hFLShTXSMj+VyUSLTg5aZXv71mi9lJQEc/cKkbb/48S/ykLfQQnJ9r+/xvSE0/9vJiVU+X7P/1rfxpRQ8acNGDYQKK2X3ipLLgGZ3ZQf8t9xcv194m/lfpa743zQvv7HPQr0x/bK/AhVRur8IAFzEVaAxg+21b7csWQdzbXLnJaMHyw0PWulUN6I7NykdMgAkPn8mn3VRL6BvXaRaYF44brLbTKQv8TuNf6xU4CaD+eY/j4Sf1OAeOnsFxTOQMnCuxOXxcYN1g2/OIS42er6Bu4lnV5aLVnebbA5yHnZ7KfYjpKz87sTTPQ6II+sk/d7Dxx1TTNYtcXg6/ou0gz7BXIqOMspAvzPYkfHueHn/V+JYE/hxYKGiwjJ1Oe5KAFZy746dJnEnivLRj0jg1XROUd/XkFztRw7+PD54cQgUz0sDXplQsqo6amdPbC8jih/T12/OTosYci84QKZ9v9FY7x3EH3FClaXk+SAaRbQlnme+jOnS0422yk8Lnun3zephi1/B+s8RWJKHPlfQAAAABJRU5ErkJggg=="/>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="our-comm__key-item-title">
                                    Expert-approved – insights from professionals and scientists                                    </div>
                            </div>
                            <div class="our-comm__key-item" data-aos="fade-right" data-aos-duration="1000">
                                <div class="our-comm__key-item-img">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="36" height="36" fill="url(#pattern0_941_257)"/>
                                        <defs>
                                            <pattern id="pattern0_941_257" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlink:href="#image0_941_257" transform="translate(-0.00900901) scale(0.00900901)"/>
                                            </pattern>
                                            <image id="image0_941_257" width="113" height="111" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABvCAYAAADboi87AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVsSURBVHgB7Z2NVdswEIDPnYBu4E5QOkHpBnSCsgF0AsIEbSegG0AnCJ0g7QShE5ANrnf4DHm8xCc5snUS972nF96LLZ39If+cLaWBBCDiEX2cUnlPpaVyTOVISm3cUvnaNM09GKGBkYi4cyonUl4TGyofrIiMlrgl7wLq7Gmh3JHET2CAKIkk8BJcXs+GJL4FAwRJJHktfdxAd65zBJI4+nSUkjfaAiTwC32swAW+5BcYYfA/SQ6fC3BeYurCZm9PdIE7YXl3YEjgXkjgKcbzQOWayhmVY7mKdXLAFzEiJJQ1lQuXZgiREtrzLsCxBUm5DBS4xu62w7GEHEZDWLlAo2B3UeI9sFQCe+GDC7RJf594ErDslfl7o9eMnOcGD6Pg2CXwUHoGjl2wy7AMngvBMQ2fE7WnE7fgZEeOmEt8zqbdPF1oyhd+KDUMdrnoXanQ7o4B9TSbP0fMyIDAniWgjie2MxEg8LE3qhLByUKgwEfegGMO7E5hSwh7Ie2X90RjxPRA3LqwcYlGGCHwuF/RJRpgtEBZ2SVm5iCBUoFLzMjBAqUSl5iJJAKlIpeYgWQCpTKXODNJBUqFLnFGkguUSl3iTEwiUCp2iTMwmUCp3CVOzKQCpQGXOCGTC5RGXOJEzCJQGnKJEzCbQGnMJSZmVoHSoEtMyOwCpVGXmIgsAqVhl5iAbAKlcZd4IFkFSgAu8QCyC5QgXOJITAiUQFziCMwIlGCyScShQSKGMSVQAsoiEffPlzP9Rh+AOYESVC6JN0rTX8AYJgVKYLkkhmBmsiOzAiW4XBJDd8glZMa0QAkwl8QlhpNNpHmBEmQuiW3EzmG+wcwUIVACzSJR2maRawyHL4ZmGfRajEAJNptEaT9W5GpqkUUJlICzSpQYYkXysi1MQHECJejsEiWOI9RntppUZJECGS1SmBERqSUBJhFZrEBGixYyQM1+x3AO3qFFC2S0iCET1PQC4xiVpiteIKNFDRkZITIqTVeFQEaLHDKD3Uz/MQRld6oRyGjRgwFQnwkySmRVAhltC8AIkTue+ZagHvsCGW0rwBB4YJquZIGoTJVZjEQGR6bpKhA4OFXmIGAQHJemK/YQisMJkGWjibLyQ48vwe4wuYS0v+u4ofKJNvkPGEJxtCmyJ/ZgfJpuCLMXMVrgRUvswbg0XVECGS34KiQyGJ/dKUIgo21ANRKZESKLuA/UNqIqiQyGp+nWJQhktA2pTiKDzzfGu+Dexz12lnd1UqA5KvYWIwTsMhrHUvj24Z7KHW3SBgpCdVSzxFrQHPls/BXgEivAJVaAS6wAl1gBLrECXGIFuMQKcIkV4BIrgCUO5hFLShTXSMj+VyUSLTg5aZXv71mi9lJQEc/cKkbb/48S/ykLfQQnJ9r+/xvSE0/9vJiVU+X7P/1rfxpRQ8acNGDYQKK2X3ipLLgGZ3ZQf8t9xcv194m/lfpa743zQvv7HPQr0x/bK/AhVRur8IAFzEVaAxg+21b7csWQdzbXLnJaMHyw0PWulUN6I7NykdMgAkPn8mn3VRL6BvXaRaYF44brLbTKQv8TuNf6xU4CaD+eY/j4Sf1OAeOnsFxTOQMnCuxOXxcYN1g2/OIS42er6Bu4lnV5aLVnebbA5yHnZ7KfYjpKz87sTTPQ6II+sk/d7Dxx1TTNYtcXg6/ou0gz7BXIqOMspAvzPYkfHueHn/V+JYE/hxYKGiwjJ1Oe5KAFZy746dJnEnivLRj0jg1XROUd/XkFztRw7+PD54cQgUz0sDXplQsqo6amdPbC8jih/T12/OTosYci84QKZ9v9FY7x3EH3FClaXk+SAaRbQlnme+jOnS0422yk8Lnun3zephi1/B+s8RWJKHPlfQAAAABJRU5ErkJggg=="/>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="our-comm__key-item-title">
                                    Proven results – structured programs that work                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inspiring-stories" v-if="courses && groupBook">
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

        <div class="fitness-reasons" v-if="courses && groupBook">
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
        <div class="get-start" v-if="courses && groupBook">
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
import { Pagination, Navigation } from 'swiper/modules';
import Banner from "@/components/Banner.vue";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {computed, onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import api from "@/services/client.js";
import {openModal} from "jenesius-vue-modal";
import PasswordReset from "@/components/PasswordReset.vue";
const router = useRouter();
const courses = ref();
const modal = ref();
const BaseUrl = ref(import.meta.env.VITE_BASE_API);
const groups = ref();
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
const swiperExploreOptions = reactive({
    breakpoints: {
        1024: {
            centeredSlides: true,
            slidesPerView: 3.3,
            spaceBetween: 100,
        }
    }
})
const groupBook = ref();
async function fetchGroups() {
    const response = await api.get('/groups');
    groupBook.value = response.reduce((acc, group) => {
        acc[group.id] = ''; // Устанавливаем значение пустой строки для каждого id
        return acc;
    }, {});
    for (const key in groupBook.value) {
        if (!groupBook.value[key]) {
            groupBook.value[key] = courses.value.find((el) => el.group === key)
        }
    }
    groups.value = response;
}
function initSwiper(swiper) {
    swiper.activeIndex = 3;
}
async function fetchCourses() {
    courses.value = (await api.get('/courses'));
}
async function openBannerModal() {
    modal.value = await openModal(Banner);
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
}
onMounted(async () => {
    setTimeout(() => {
        openBannerModal();
    },10000)
    await fetchCourses();
    await fetchGroups();
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
    .courses-groups {
        margin-top: 60px;
        margin-bottom: 60px;
        @include mqm(1024) {
            margin-top: 80px;
            margin-bottom: 80px;
        }
        .container {
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0 210px;
            }
        }
        &__list {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            @include mqm(1024) {
                justify-content: space-between;
            }
        }
        &__item {
            padding: 17px 20px;
            width: fit-content;
        }
    }
    .our-comm {
        position: relative;
        background-color: #fff;
        box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.1);
        gap: 120px;
        padding: 80px 0;
        @include mqm(1024) {
            padding: 80px 80px;
            display: flex;
        }
        &__left {
            flex: 73%;
        }
        &__key-points-title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: normal;
            background: #1969AD;
            letter-spacing: 3px;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #576C7E;
            text-align: center;
            padding: 0 20px;
            margin-bottom: 25px;
            @include mqm(1024) {
                display: none;
            }
        }
        &__subtitle {
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 1px;
            color: #000;
            font-family: "AtkinsonHyperlegible", sans-serif;
            margin-top: 15px;
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0;
                line-height: 24px;
                font-size: 24px;
            }
        }
        &__right {
            flex: 45%;
            margin-top: 50px;
            padding: 0 40px;
            @include mqm(1024) {
                padding: 0;
                margin-top: 0;
            }
        }
        .blick {
            position: absolute;
            height: 239px;
            left: -7%;
            svg {
                height: 300px;
            }
            display: none;
            @include mqm(1024) {
                display: block;
            }
        }
        &__key-item-title {
            color: #fff;
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: normal;
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            @include mqm(1024) {
                font-size: 20px;
                line-height: 26px;
            }
        }
        &__key-item-img {
            margin-right: 20px;
            flex: 0 0 auto;
        }
        &__key-item {
            background: rgb(26, 105, 173);
            border-radius: 20px;
            padding: 20px;
            display: flex;
            align-items: center;
            background: linear-gradient(90deg, rgba(26, 105, 173, 1) 0%, rgba(11, 43, 71, 1) 100%);
        }
        &__key-points-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        &__title {
            font-family: 'AtkinsonHyperlegible',sans-serif;
            font-style: italic;
            background: #1969AD;
            letter-spacing: 3px;
            background: linear-gradient(to right, #1969AD 3%, #7EB8E8 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            font-size: 40px;
            line-height: 40px;
            color: #576C7E;
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0;
            }
        }
        &__text {
            font-size: 16px;
            margin-top: 25px;
            font-family: 'Inter', sans-serif;
            padding: 0 20px;
            @include mqm(1024) {
                padding: 0;
                font-size: 18px;
            }
        }
    }
    .transform-block {
        @include mqm(1024) {
            background-image: url("../img/transform@1024.png");
            background-repeat: no-repeat;
            background-size: 830px;
            background-position: right 20%;
            @include mqm(1000) {
                background-position: right 5%;
            }
            @include mqm(1089) {
                background-position: right 10%;
            }
            @include mqm(1400) {
                background-position: right 20%;
            }
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
        background-color: rgba(72, 135, 189, 0.1);
        padding-top: 60px;
        @include mqm(1024) {
            padding-top: 80px;
        }
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
        &__items-mobile {
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 30px;
            column-gap: 20px;
            //max-height: 166px;
            .fitness-explore__item-title {
                margin: 0;
                margin-top: 20px;
                font-size: 14px;
                font-weight: 500;
            }
            .fitness-explore__item-img {
                border-radius: 30px;
                max-height: 166px;
                height: 100%;
                img {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 10px;
                }
            }
            @include mqm(1024) {
                display: none;
            }
        }
        &__items {
            @include mqm(1024) {
                display: block;
                gap: 100px;
                min-height: 400px;
            }
            .swiper {
                display: none;
                padding: 0 80px;
                @include mqm(1024) {
                    display: flex;
                }
                .swiper-slide {
                    transition: 300ms opacity ease;
                    opacity: 0.5;
                    &-prev, &-active, &-next {
                        opacity: 1;
                    }
                }
                .swiper-button-prev, .swiper-button-next {
                    transform: translate(0,-80%) scale(1, 1.6) !important;
                    color: #fff;
                }
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
            margin: 50px 20px 50px 20px;
            padding: 14px 0;
            text-align: center;
            cursor: pointer;
            width: auto;
            border: 1px solid #1969AD;
            border-radius: 20px;
            color: #1969AD;
            font-size: 20px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            background-color: #fff;
            @include mqm(1024) {
                width: 100%;
                margin: 50px auto;
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
