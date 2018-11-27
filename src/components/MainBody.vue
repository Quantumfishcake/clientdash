<template>
  <div class="container">
    <Row1 v-if="everythingIsReady" v-bind:data='row1data'/>
    <Row2 />
    <Row3 message='hello'/>
    <Row4 />
    <Row5 />
</div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Row1 from './Rows/Row1.vue'
import Row2 from './Rows/Row2.vue'
import Row3 from './Rows/Row3.vue'
import Row4 from './Rows/Row4.vue'
import Row5 from './Rows/Row5.vue'



export default {
  name: 'MainBody',
  data () {
    
    return {
      info: null,
      row1data: [''],
      everythingIsReady: false
    }
  },
   mounted () {
    axios
      .get('https://api.myjson.com/bins/t7zsi')
      .then(response => (
          this.info = response,
          this.row1data = response,
          this.everythingIsReady = true,
          console.log(this.everythingIsReady)
      ))
  },
 
  
 components: {
    Row1,
    Row2,
    Row3,
    Row4,
    Row5
  }
}
</script>


