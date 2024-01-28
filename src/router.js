import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import Post from "@/components/Post";

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
        component: Post
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