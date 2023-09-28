import HomE from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import {createRouter, createWebHistory} from 'vue-router';
import LogiN from './components/Login';
import AdD from './components/Add.vue';
import UpdatE from './components/Update.vue';

const routes = [
    {
        name:"Home",
        component:HomE,
        path:"/"
    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/sign-up"
    },
    {
        name:"Login",
        component:LogiN,
        path:"/login"
    },
    {
        name:"Add",
        component:AdD,
        path:"/add"
    },
    {
        name:"Update",
        component:UpdatE,
        path:"/update/:id"
    }

]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router

