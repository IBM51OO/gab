import axios from 'axios';
import {useCookies} from "vue3-cookies";
const  { cookies } = useCookies();

// Request interceptors
axios.defaults.headers["Accept"] = "application/json"
axios.defaults.headers["Content-Type"] = "application/json"
axios.interceptors.request.use(
    (config) => {
        // Do or set some things before the request is set

        // e.g. Authorization header
        // config.headers["Authorization"] = `Bearer '`

        // e.g. Content-type
        // config.headers["Accept"] = "application/json"
        // config.headers["Content-Type"] = "application/json"

        // e.g. set Base url
        config.headers["Authorization"] = "Bearer " + cookies.get('access_token');
        config.baseURL = "http://91.227.40.254:8880"

        return config
    },
    (error) => {
        return Promise.reject(error)
    })

// Response interceptors
axios.interceptors.response.use(
    (response) => {
        // do something i.e. return data object
        return response.data
    },
    (error) => {
        if (error?.response?.status === 403) {
            // Handle forbidden error e.g. show restricted access warning
        }

        if (error?.response?.status === 401) {
            // Handle unauthorized error e.g. refresh and set token in storage
        }

        throw error // forward other client errors
    })
const api = axios;
export default api;
