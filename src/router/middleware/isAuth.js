import {useCookies} from "vue3-cookies";
import {useMainStore} from "@/stores/main.js";

const { cookies } = useCookies();

export default function auth({ next }) {
    const mainStore = useMainStore();
    console.log(mainStore.getIsAuth)
    if (cookies.get("access_token")) {
        return next();
    }
    return next({ name: "sign-in" });
}
