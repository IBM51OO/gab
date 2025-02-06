import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', () => {
    const currentPersonalPage = ref('my');
    const isAuth = ref(false);
    const currency = ref('EUR');
    const user = ref('');

    const getCurrency = computed(() => currency.value);
    const getIsAuth = computed(() => isAuth.value);
    const getCurrentPersonalPage = computed(() => currentPersonalPage.value);
    const getUser = computed(() => user.value);

    function changeCurrency(newCur) {
        currency.value = newCur;
    }

    function changeIsAuth(status) {
        console.log('Authentication status changed:', status);
        isAuth.value = status;
    }

    function changeCurrentPersonalPage(name) {
        currentPersonalPage.value = name;
    }
    function setUser(userData) {
        user.value = userData;
    }
    return {
        currency,
        getCurrency,
        changeCurrency,
        setUser,
        getUser,
        isAuth,
        getIsAuth,
        changeIsAuth,
        currentPersonalPage,
        getCurrentPersonalPage,
        changeCurrentPersonalPage
    };
});
