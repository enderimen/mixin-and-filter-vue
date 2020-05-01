import Vue from 'vue'
import App from './App.vue'

Vue.filter('countLetter', text => {
  return text.length;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
