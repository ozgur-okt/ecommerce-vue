import {createRouter, createWebHistory} from 'vue-router'

import Login from '../components/Login'
import Products from '../components/Products'
import Cart from '../components/Cart'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;