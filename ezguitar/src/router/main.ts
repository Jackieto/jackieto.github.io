import { createRouter, createWebHistory} from 'vue-router'

import chords from '../pages/chords.vue'

const routes = [
    {
        path:'/',
        redirect: '/chords',
    },
    {
        path: '/chords',
        component: chords
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})