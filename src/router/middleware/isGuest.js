import {useCookies} from "vue3-cookies";

const { cookies } = useCookies();

export default function guest({ next }) {
    if (!cookies.get("access_token")) {
        return next();
    }
    return next({ name: "profile" });
}
