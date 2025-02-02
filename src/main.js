import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

// Bootstrap
import '@/config/bootstrap';

// FontAwesome
import '@/config/fontawesome';

// Main SCSS File
import '@/assets/scss/style.scss';

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  return moment(value.toString()).format('MM/DD/YYYY hh:mm')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
