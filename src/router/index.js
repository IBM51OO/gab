import {createRouter, createWebHistory} from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayoutMiddleware.js';
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import BlogPage from "@/views/BlogPage.vue";
import CoursesPage from "@/views/CoursesPage.vue";
import CourseDetailPage from "@/views/CourseDetailPage.vue";
import CourseGroupPage from "@/views/CourseGroupPage.vue";
import AuthPage from "@/views/AuthPage.vue";
import auth from '@/router/middleware/isAuth.js'
import UserProfilePage from "@/views/UserProfilePage.vue";
import CartPage from "@/views/CartPage.vue";
import CoursePage from "@/views/CoursePage.vue";
import guest from "@/router/middleware/isGuest.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/courses',
            name: 'courses',
            component: CoursesPage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/course-group/:id',
            name: 'course-group',
            component: CourseGroupPage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/course/:id',
            name: 'course',
            component: CourseDetailPage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: AuthPage,
            meta: {
                layout: 'DefaultLayout',
                middleware: [guest],
            },
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfilePage,
            meta: {
                layout: 'ProfileLayout',
                middleware: [auth],
            },
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartPage,
            meta: {
                layout: 'DefaultLayout',
            },
        },
        {
            path: '/course/:id/detail',
            name: 'cart-item',
            component: CoursePage,
            meta: {
                layout: 'DefaultLayout',
            },
        },

        /*    {
              path: '/about',
              name: 'about',
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import('../views/AboutView.vue'),
            },*/
    ],
})
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach(async (to, from, next) => {
    try {
        const { layout } = to.meta;
        const layoutComponent = await import(`@/layouts/${layout}.vue`);
        to.meta.layoutComponent = layoutComponent.default;
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e);
        console.log('Mounted default layout AppLayoutDefault');
        const defaultLayout = 'DefaultLayout';
        const layoutComponent = await import(`@/layouts/${layout}.vue`);
        to.meta.layoutComponent = layoutComponent.default;
    }

    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

// router.beforeEach(loadLayoutMiddleware);
export default router
