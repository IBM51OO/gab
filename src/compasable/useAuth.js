import { computed } from 'vue';
import {useMainStore} from "@/stores/main.js";

export function useAuth() {
    const store = useMainStore();

    const isAuthenticated = computed(() => {
        return store.getIsAuth;
    });

    return {
        isAuthenticated,
    };
}
