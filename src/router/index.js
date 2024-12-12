import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../views/MainPage.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";



const routes = [
    {
        path: "/mainpage",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    { //will route to MainPage view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "MainPage",
        component: MainPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router