import Vue2Csspin from './components/Vue2Csspin.vue'

const install = (Vue) => {
  Vue.component('vue2-csspin', Vue2Csspin)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
    Vue2Csspin
}

export default install













