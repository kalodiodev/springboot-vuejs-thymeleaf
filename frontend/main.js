window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="_csrf"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

import Vue from 'vue'

Vue.config.productionTip = false

Vue.component('hello-world', require('./components/HelloWorld.vue').default);

new Vue({
  el: '#app'
});