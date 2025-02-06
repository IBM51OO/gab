import { ref } from 'vue';
import axios from 'axios';

export function useAxios() {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const get = async (url, config = {}) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get(url, config);
            data.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    const post = async (url, payload, config = {}) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.post(url, payload, config);
            data.value = response.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    // Вы можете добавить другие методы, такие как put, delete и т.д.

    return {
        data,
        error,
        loading,
        get,
        post,
    };
}
