import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'pagenotfound',
    //     component: PageNotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;