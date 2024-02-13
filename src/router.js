import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import PostPage from "@/pages/PostPage";

const {createRouter, createWebHistory} = require("vue-router/dist/vue-router");

const routes = [
    {
        path : '/',
        component: LoginPage
    },
    {
        path : '/profile',
        component: MainPage
    },
    {
        path: '/post/:id',
        name: 'post',
        component: PostPage
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router