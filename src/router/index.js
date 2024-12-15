import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../views/MainPage.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import ContactUs from "../views/ContactUs.vue";
import auth from "../auth";






const routes = [{
    path: "/",
    name: "home",
    component: MainPage,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
{
    path: "/mainpage",
    name: "MainPage",
    component: MainPage,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
{
    path: "/apost/:id",
    name: "APost",
    component: APost,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},

{
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
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
{
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
},
{ //will route to MainPage view if none of the previous routes apply
    path: "/:catchAll(.*)",
    name: "MainPage",
    component: MainPage,
    beforeEnter: async (to, from, next) => {
        next('/login')
    }
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router