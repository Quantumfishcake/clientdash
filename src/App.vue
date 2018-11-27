<template>
  <div id="app">
    <Header />
    <MainBody msg="Client Dashboard" number='44'/>
   
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueCharts from 'vue-chartjs'
import VueAxios from 'vue-axios'
import MainBody from './components/MainBody.vue'
import Row1 from './components/Rows/Row1.vue'
import Header from './components/Header.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

 
Vue.use(VueAxios, axios)

Vue.use(VueCharts);
Vue.use(BootstrapVue);


export default {
  name: 'app',
  components: {
    MainBody,
    Header,
  }
}
</script>

<style lang='scss'>
@import '../src/assets/css/master.scss';
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,700');

</style>
