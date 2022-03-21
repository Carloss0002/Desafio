import { shallowMount } from '@vue/test-utils'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

mount(Component, {
    localVue,
    router
  })

const $route = {
  path: '/Confirmar/:Produto/:Total'
}

const wrapper = shallowMount(Component, {
  mocks: {
    $route
  }
})

wrapper.vm.$route.path