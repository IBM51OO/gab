<template>
    <div class="main">
        <HeaderComponent />
        <slot />
        <Footer />
    </div>
</template>
<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
</script>
<style lang="scss">
.main {
    &__content {
        display: flex;
    }
}
</style>
