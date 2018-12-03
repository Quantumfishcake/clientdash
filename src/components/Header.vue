<template>
<div class='header'>
   <div class='row' style='margin-top: 0;'>
       <div class='col-md-4'>
           <div class='row' style='margin: 0; padding: 0;'>
               <div class='col-md-8'>
                <img src='../assets/images/LongtailUXsm2.png'  style='height: 80%;'/>
               </div>
               <div class='col-md-4' style='margin: auto;'>
                <span class='insights'>INSIGHTS</span>
                <button v-on:click='changename'>{{ name }}</button>
                </div>
           </div>
       </div>
       <div class='col-md-4' style='margin: auto;'>
            <div class='header-rectangle'>
                <!-- <div class='row' style='margin: 0; text-align: center; height: 50px;'>
                    <div class='col-md-6 bg-w seo-sem'  style='margin: auto; border-radius: 24px; height: 85%; position: relative; left: 3px; line-height: 40px'>SEO</div>
                    <div class='col-md-6 seo-sem' style='margin: auto'>SEM</div>
                </div> -->
               <label class="switch seo-sem">
                    <input id='checkbox' type="checkbox"  v-on:change='changechecked'>
                     <span class="slider"></span>
                   <span v-bind:class="{'active': checked}" style='position: relative; left: 205px;  top: 12px;'>SEM</span>
                    <span v-bind:class="{'active': !checked}" style='position: relative; left: 33px; top: 12px;'>SEO</span>
                </label>
            </div>
       </div>
        <div class='col-md-1'>
            </div>
       <div class='col-md-3' style='margin: auto;'>
           <div class='row' style='margin: 0; text-align: center; height: 83px;'>
               <div class='col-md-2'> </div>
                    <div class='col-md-4 bg-w seo-sem'  style='margin: auto; border-left: 1px solid #efeeea; border-right: 1px solid #efeeea; height: 83px; line-height:75px; border-radius: 0;'>
                        <span class='helper'><img src='../assets/images/9-bell.png' style='vertical-align: middle; '/></span>
                    </div>
                    <div class='col-md-6 seo-sem' style='margin: auto'><img src='../assets/images/2-exit.png' class='pr-2'/><span><a href='/users'>LOGOUT</a></span></div>
                </div>
       </div>
   </div>
</div>


</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Header',
  computed: {
    seosem() {

      return this.$store.state.seosem
    }
  },
  data() {
      return {
          name: 'tom',
          number: 5,
          info: null,
          code: null,
          checked: false
      }
  },
   
    methods: {
        changename: function() {
            this.name === 'tom' ? this.name = 'steve' : this.name = 'tom'
        },
        changechecked: function() {
            this.checked = !this.checked
            this.$store.state.seosem[1].sem = !this.$store.state.seosem[1].sem
            this.$store.state.seosem[0].seo = !this.$store.state.seosem[0].seo
            console.log(this.$store.state.seosem[1].sem)
        }
    },
   
}
</script>