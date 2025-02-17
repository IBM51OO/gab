<template>
    <div class="burger-menu">
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" id="menuCheckbox" />
                <span></span>
                <span class="middle"></span>
                <span></span>
                <ul id="menu">
                    <li v-for="(item, index) in items" :key="index">
                        <a :href="item.href" v-if="item.href">
                            <label for="menuCheckbox" onclick="this.parentNode.click();" v-html="item.label" />
                        </a>
                        <label for="menuCheckbox" @click="onRouteNav(this, item.name)" v-html="item.label" />
                    </li>
                    <li class="logo">
                        <logo-svg class="header-logo-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script setup>
    import LogoSvg from "@/img/logo.svg";
    import {useRouter} from "vue-router";
    const router = useRouter();

    defineProps({
        items: {
            type: Array,
            default: () => [],
        },
    })
    const onRouteNav = (self, name) => {
        if (name === 'wallets') return;
        router.push({name})
    }
</script>
<style lang="scss">
    .burger-menu {
        #menuToggle
        {
            display: block;
            /* You can also use relative/absolute here if you want to stay on the top */
            position: fixed;
            top: 50px;
            right: 20px;

            z-index: 1;

            -webkit-user-select: none;
            user-select: none;
        }
        .logo {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translate(-50%, 0);
        }
        #menuToggle a
        {
            text-decoration: none;
            color: #232323;

            transition: color 0.3s ease;
        }
        .middle {
            width: 25px;
        }
        #menuToggle a:hover
        {
            color: tomato;
        }


        #menuToggle input
        {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;

            cursor: pointer;

            opacity: 0; /* hide this */
            z-index: 2; /* and place it over the hamburger */

            -webkit-touch-callout: none;
        }

        /*
         * Just a quick hamburger
         */
        #menuToggle span
        {
            display: block;
            width: 30px;
            height: 1px;
            margin-bottom: 5px;
            position: relative;

            background: #000;

            z-index: 1;

            transform-origin: 4px 0px;

            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;
        }

        #menuToggle span:first-child
        {
            transform-origin: 0% 0%;
        }

        #menuToggle span:nth-last-child(2)
        {
            transform-origin: 0% 100%;
        }

        /*
         * Transform all the slices of hamburger
         * into a crossmark.
         */
        #menuToggle input:checked ~ span
        {
            opacity: 1;
            transform: rotate(45deg) translate(-6px, -3px);
            background: #000000;
        }

        /*
         * But let's hide the middle one.
         */
        #menuToggle input:checked ~ span:nth-last-child(3)
        {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }

        /*
         * Ohyeah and the last one should go the other direction
         */
        #menuToggle input:checked ~ span:nth-last-child(2)
        {
            transform: rotate(-45deg) translate(0, -1px);
        }

        /*
         * Make this absolute positioned
         * at the top left of the screen
         */
        #menu
        {
            position: absolute;
            width: 100vw;
            max-height: 100vh;
            margin: 0 0 0 50px;
            padding: 35px 50px 0 50px;
            box-sizing: border-box;
            overflow-y: auto;
            top: -50px;
            background: #ededed;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            /* to stop flickering of text in safari */
            height: 100vh;
            transform-origin: 0% 0%;
            transform: translate(20px, 0);

            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }

        #menu li
        {
            &:not(:first-child) {
                margin-top: 50px;
            }
            padding: 0;
            line-height: 20px;
            font-size: 22px;
        }

        #menu li label
        {
            cursor: pointer;
            font-family: 'Roboto-Regular',serif;
            font-weight: bold;
            font-size: 18px;
            p {
                display: inline;
                &.active {
                    font-size: 28px;
                }
            }
        }

        /*
         * And let's slide it in from the left
         */
        #menuToggle input:checked ~ ul
        {
            transform: translate(-100%, 0);
        }
    }
</style>
