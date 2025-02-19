<template>
    <div class="popup" :class="{'popup--show': show}">
        <div class="popup-wrapper">
            <div class="popup-close" @click="closePopup">
                <CloseIcon />
            </div>
            <div class="popup__content">
                <slot/>
            </div>
        </div>
    </div>
</template>
<script setup>
import CloseIcon from "@/img/svg/close.svg?component";
import {watch} from "vue";
const show = defineModel()
function closePopup() {
    show.value = false;
}
watch(show, (newShow) => {
    console.log(document.body)
    newShow ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
})
</script>
<style lang="scss">
.popup {
    position: fixed;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.25);
    top: 0;
    z-index: 999;
    left: 0;
    transform: translate(0, 100%);
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    &--show {
        transform: translate(0, 0);
    }
    .popup-close {
        position: absolute;
        cursor: pointer;
        justify-content: right;
        right: 6%;
        border-bottom-left-radius: 10px;
        padding: 23px;
        background-color: #fff;
        svg {
            height: 25px;
            width: 25px;
        }
        top: 19px;
    }
    .popup-wrapper {
        padding: 20px;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.35);
        height: fit-content;
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
        @include mqm(1024) {
            padding: 40px;
        }
    }
    &__content {
        background-color: #fff;
    }
}
</style>
