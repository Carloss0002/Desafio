import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Form.vue'
import Confirmar from './components/confirmar.vue'


Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path:'/Confirmar/:Produto/:Total',
            component: Confirmar,
            props: true
        }
    ]
})

export default router;

